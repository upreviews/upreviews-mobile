import { SignupType, ThirdPartyUserData } from "@/types/auth";
import {
  AppleAuthenticationButton,
  AppleAuthenticationButtonStyle,
  AppleAuthenticationButtonType,
  AppleAuthenticationScope,
  formatFullName,
  isAvailableAsync,
  signInAsync,
} from "expo-apple-authentication";
import { jwtDecode } from "jwt-decode";
import { useCallback, useEffect, useState } from "react";
import { Alert, Platform } from "react-native";

type ButtonType = "signIn" | "signUp" | "continue";

interface AppleAuthButtonProps {
  onFulfilled: (data: ThirdPartyUserData) => Promise<void>;
  type?: ButtonType;
}
export function AppleAuthButton({
  onFulfilled,
  type = "continue",
}: AppleAuthButtonProps) {
  const [appleAuthAvailable, setAppleAuthAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const isAvailable = await isAvailableAsync();
        setAppleAuthAvailable(isAvailable && Platform.OS === "ios");
      } catch {
        setAppleAuthAvailable(false);
      }
    })();
  }, []);

  const handleClick = useCallback(async () => {
    try {
      if (isLoading) return;

      setIsLoading(true);
      const appleData = await signInAsync({
        requestedScopes: [
          AppleAuthenticationScope.FULL_NAME,
          AppleAuthenticationScope.EMAIL,
        ],
      });

      if (!appleData.identityToken) {
        throw new Error("Authorization code is missing");
      }

      const decodedToken = jwtDecode<any>(appleData.identityToken);

      const email: string | undefined = appleData.email ?? decodedToken.email;

      const formattedName = appleData.fullName
        ? formatFullName(appleData.fullName, "long")
        : undefined;

      const fullName: string | undefined = !!formattedName
        ? formattedName
        : email?.split("@")[0];

      const userData: ThirdPartyUserData = {
        email,
        fullName,
        thirdPartyToken: appleData.identityToken,
        signupType: SignupType.APPLE,
      };
      await onFulfilled(userData);
    } catch (e: any) {
      if (e.code !== "ERR_REQUEST_CANCELED") {
        Alert.alert("Error", "An error occurred while signing in with Apple.");
        console.log(
          "An error occurred with Apple authentication request",
          e.code,
          e.message,
        );
      }
    } finally {
      setIsLoading(false);
    }
  }, [onFulfilled]);

  const buttonType: Record<ButtonType, AppleAuthenticationButtonType> = {
    signIn: AppleAuthenticationButtonType.SIGN_IN,
    signUp: AppleAuthenticationButtonType.SIGN_UP,
    continue: AppleAuthenticationButtonType.CONTINUE,
  };

  if (!appleAuthAvailable) return null;

  return (
    <AppleAuthenticationButton
      buttonType={buttonType[type]}
      buttonStyle={AppleAuthenticationButtonStyle.WHITE_OUTLINE}
      onPress={handleClick}
      cornerRadius={80}
      style={{ width: "100%", height: 48 }}
    />
  );
}
