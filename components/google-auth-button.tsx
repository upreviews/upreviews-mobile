import { GoogleIcon } from "@/assets/images/google-icon";
import { useColors } from "@/hooks/use-colors";
import { SignupType, ThirdPartyUserData } from "@/types/auth";
import axios, { AxiosResponse } from "axios";
import { TokenResponse } from "expo-auth-session/build/TokenRequest";
import * as Google from "expo-auth-session/providers/google";
import Constants from "expo-constants";
import * as WebBrowser from "expo-web-browser";
import React, { FC, useCallback, useEffect, useState } from "react";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import Text from "./text";

WebBrowser.maybeCompleteAuthSession();

interface GoogleUser {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  name: string;
  picture: string;
  verified_email: boolean;
}
interface IProps {
  onFulfilled: (data: ThirdPartyUserData) => Promise<void>;
}
export const GoogleAuthButton: FC<IProps> = ({ onFulfilled }) => {
  const [isLoading, setIsLoading] = useState(false);
  const colors = useColors();

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: Constants.expoConfig?.extra?.googleIosClientId,
    androidClientId: Constants.expoConfig?.extra?.googleAndroidClientId,
    clientId: Constants.expoConfig?.extra?.googleWebClientId,
    scopes: ["openid", "profile", "email"],
  });

  const handleFulfilled = useCallback(
    async (authentication: TokenResponse) => {
      try {
        const { data: userData } = await axios.get<
          unknown,
          AxiosResponse<GoogleUser>
        >("https://www.googleapis.com/userinfo/v2/me", {
          headers: { Authorization: `Bearer ${authentication.accessToken}` },
        });

        onFulfilled({
          signupType: SignupType.GOOGLE,
          thirdPartyToken: authentication.accessToken,
          email: userData.email,
          fullName: userData.name,
        });
      } catch (err: any) {
        Alert.alert("Unable to continue with Google", err.message);
      } finally {
        setIsLoading(false);
      }
    },
    [onFulfilled],
  );

  useEffect(() => {
    const handleResponse = async () => {
      if (response?.type === "success" && !!response.authentication) {
        handleFulfilled(response.authentication);
      } else if (response?.type === "error" || response?.type === "dismiss") {
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };

    handleResponse();
  }, [response, handleFulfilled]);

  const handleClick = useCallback(async () => {
    if (isLoading || !request) return;
    setIsLoading(true);
    promptAsync({ dismissButtonStyle: "cancel" });
  }, [promptAsync, isLoading]);

  return (
    <TouchableOpacity
      style={[
        styles.socialButton,
        isLoading && [
          styles.disabledButton,
          {
            backgroundColor: colors.surface2,
            borderColor: colors.surface3,
          },
        ],
      ]}
      onPress={handleClick}
      disabled={isLoading}
    >
      <GoogleIcon />
      <Text style={[styles.socialButtonText, { color: colors.black }]}>
        {isLoading ? "Loading..." : "Continue with Google"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 80,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    gap: 10,
    height: 48,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  disabledButton: {
    opacity: 0.6,
  },
});
