import { Button } from "@/components/button";
import { Screen } from "@/components/screen";
import Text from "@/components/text";
import { useColors } from "@/hooks/use-colors";
import { Link } from "expo-router";
import { Dimensions, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LoginForm } from "./form";

const { height } = Dimensions.get("window");

export function LoginPageComponent() {
  const colors = useColors();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <Screen
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      safeareaTop={false}
      safeareaBottom={false}
    >
      <View style={{ height: top + 300 }} />
      <View
        style={[
          styles.content,
          {
            backgroundColor: colors.surface0,
            paddingBottom: bottom + 40,
          },
        ]}
      >
        <Text style={styles.title}>Hi, welcome back</Text>
        <Text style={[styles.description, { color: colors.mutedForeground }]}>
          Log into your account
        </Text>

        <LoginForm />

        <View style={{ gap: 12, marginTop: 32 }}>
          <Text style={{ textAlign: "center" }}>
            You don't have an account yet?
          </Text>
          <Link href="/signup" replace asChild>
            <Button>Create Account</Button>
          </Link>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: height,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderCurve: "continuous",
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    letterSpacing: -2,
  },
  description: {
    fontSize: 18,
  },
});
