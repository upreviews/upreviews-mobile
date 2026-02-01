import { Button } from "@/components/button";
import { Screen } from "@/components/screen";
import Text from "@/components/text";
import { TextInput } from "@/components/text-input";
import { useColors } from "@/hooks/use-colors";
import { Link, useRouter } from "expo-router";
import { useCallback } from "react";
import { View } from "react-native";

export function ForgotPasswordPageComponent() {
  const colors = useColors();
  const router = useRouter();

  const onSubmit = useCallback(() => {
    router.replace("/reset-password");
  }, [router]);

  return (
    <Screen title="Forgot Password">
      <View style={{ padding: 20, paddingTop: 40 }}>
        <View style={{ gap: 24 }}>
          <Text style={{ color: colors.mutedForeground }}>
            Enter your email to reset your password
          </Text>
          <TextInput
            label="Email Address"
            placeholder="Enter email address"
            autoComplete="email"
          />

          <Button appearance="primary" onPress={onSubmit}>
            Reset Password
          </Button>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
            marginVertical: 40,
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

        <Link href="/login" dismissTo asChild>
          <Button appearance="default">Login Instead</Button>
        </Link>
      </View>
    </Screen>
  );
}
