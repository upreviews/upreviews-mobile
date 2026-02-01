import { Button } from "@/components/button";
import Text from "@/components/text";
import { useColors } from "@/hooks/use-colors";
import { Link } from "expo-router";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SignupForm } from "./form";

const { height } = Dimensions.get("window");

export function SignupPageComponent() {
  const colors = useColors();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <Animated.ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={{ flexGrow: 1 }}
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
        <Text style={styles.title}>Get Started</Text>
        <Text style={[styles.description, { color: colors.mutedForeground }]}>
          Create your free account
        </Text>

        <SignupForm />

        <View style={{ gap: 12, marginTop: 32 }}>
          <Text style={{ textAlign: "center" }}>Already have an account?</Text>
          <Link href="/login" dismissTo asChild>
            <Button>Sign In</Button>
          </Link>
        </View>
      </View>
    </Animated.ScrollView>
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
