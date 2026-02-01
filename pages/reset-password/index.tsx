import { Button } from "@/components/button";
import { Screen } from "@/components/screen";
import Text from "@/components/text";
import { TextInput } from "@/components/text-input";
import { useColors } from "@/hooks/use-colors";
import { Link, useRouter } from "expo-router";
import { useCallback } from "react";
import { View } from "react-native";

export function ResetPasswordPageComponent() {
  const colors = useColors();
  const router = useRouter();

  const onSubmit = useCallback(() => {
    router.replace("/reset-password");
  }, [router]);

  return (
    <Screen
      title="Reset Password"
      headerRightContent={
        <Link href="/login" dismissTo asChild>
          <Button size="small">Cancel</Button>
        </Link>
      }
    >
      <View style={{ padding: 20, paddingTop: 40 }}>
        <View style={{ gap: 24 }}>
          <Text style={{ color: colors.mutedForeground }}>
            Set a new password for your account
          </Text>
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

          <Button appearance="primary" onPress={onSubmit}>
            Set Password
          </Button>
        </View>
      </View>
    </Screen>
  );
}
