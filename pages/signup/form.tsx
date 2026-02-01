import { AppleAuthButton } from "@/components/apple-auth-button";
import { Button } from "@/components/button";
import { GoogleAuthButton } from "@/components/google-auth-button";
import Text from "@/components/text";
import { TextInput } from "@/components/text-input";
import { useColors } from "@/hooks/use-colors";
import * as WebBrowser from "expo-web-browser";
import { useCallback } from "react";
import { View } from "react-native";

export function SignupForm() {
  const colors = useColors();

  const handleThirdPartyLogin = useCallback(async () => {}, []);

  const openTerms = () => {
    WebBrowser.openBrowserAsync("https://upreviews.net/terms", {
      dismissButtonStyle: "close",
      readerMode: true,
      windowName: "Terms",
    });
  };

  const openPrivacyPolicy = () => {
    WebBrowser.openBrowserAsync("https://upreviews.net/privacy-policy", {
      dismissButtonStyle: "close",
      readerMode: true,
      windowName: "Privacy Plicy",
    });
  };

  return (
    <View style={{ gap: 24, marginVertical: 32 }}>
      <TextInput
        label="Email Address"
        placeholder="Enter email address"
        autoComplete="email"
      />
      <TextInput
        label="Password"
        placeholder="Enter password"
        autoComplete="new-password"
        secureTextEntry
      />
      <TextInput
        label="Password Again"
        placeholder="Enter password again"
        autoComplete="new-password"
        secureTextEntry
      />

      <Text>
        By signing up, it means you have agreed to our{" "}
        <Text onPress={openTerms} style={{ color: colors.primary }}>
          terms
        </Text>{" "}
        and{" "}
        <Text onPress={openPrivacyPolicy} style={{ color: colors.primary }}>
          privacy policy
        </Text>
        .
      </Text>

      <Button appearance="primary">Sign up</Button>

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
