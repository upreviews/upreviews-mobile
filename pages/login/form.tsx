import { AppleAuthButton } from "@/components/apple-auth-button";
import { Button } from "@/components/button";
import { GoogleAuthButton } from "@/components/google-auth-button";
import Text from "@/components/text";
import { TextInput } from "@/components/text-input";
import { useColors } from "@/hooks/use-colors";
import { Link } from "expo-router";
import { useCallback } from "react";
import { View } from "react-native";

export function LoginForm() {
  const colors = useColors();

  const handleThirdPartyLogin = useCallback(async () => {}, []);

  return (
    <View style={{ gap: 24, marginVertical: 32 }}>
      <TextInput label="Email Address" placeholder="Enter email address" />
      <TextInput
        label="Password"
        placeholder="Enter password"
        secureTextEntry
      />
      <View style={{ alignItems: "flex-end" }}>
        <Link href="/forgot-password" asChild>
          <Text
            style={{
              color: colors.primary,
              textAlign: "right",
              paddingLeft: 10,
            }}
          >
            Forgot Password?
          </Text>
        </Link>
      </View>
      <Button appearance="primary">Log in</Button>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          marginVertical: 12,
        }}
      >
        <View
          style={{ height: 1, backgroundColor: colors.surface3, flex: 1 }}
        />
        <Text style={{ textAlign: "center", color: colors.mutedForeground }}>
          OR
        </Text>
        <View
          style={{ height: 1, backgroundColor: colors.surface3, flex: 1 }}
        />
      </View>
      <View style={{ gap: 12 }}>
        <AppleAuthButton onFulfilled={handleThirdPartyLogin} />
        <GoogleAuthButton onFulfilled={handleThirdPartyLogin} />
      </View>
    </View>
  );
}
