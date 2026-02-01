import { Button } from "@/components/button";
import Text from "@/components/text";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import Animated, {
    Easing,
    FadeInDown,
    FadeInUp,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export function OnboardingMainPageComponent() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <View style={{ flex: 1 }} />
        <View style={{ gap: 10 }}>
          <Animated.View
            entering={FadeInDown.duration(1000).delay(0).easing(Easing.linear)}
            exiting={FadeInUp.duration(1000).delay(0).easing(Easing.linear)}
          >
            <Text style={styles.subtitle}>Welcome to UPreviews</Text>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(1000)
              .delay(300)
              .easing(Easing.linear)}
            exiting={FadeInUp.duration(1000).delay(300).easing(Easing.linear)}
          >
            <Text style={styles.title}>Let's Make This Yours</Text>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(1000)
              .delay(600)
              .easing(Easing.linear)}
            exiting={FadeInUp.duration(1000).delay(600).easing(Easing.linear)}
          >
            <Text style={styles.description}>
              Before we start recommending movies, let's learn what you love. It
              only takes a few taps.
            </Text>
          </Animated.View>
        </View>
        <Animated.View
          entering={FadeInDown.duration(1000)
            .delay(1_600)
            .easing(Easing.linear)}
          exiting={FadeInUp.duration(1000).delay(1200).easing(Easing.linear)}
          style={{ marginTop: 60, paddingBottom: 60 }}
        >
          <Link href="/onboarding/genre" asChild>
            <Button appearance="primary">Continue</Button>
          </Link>
        </Animated.View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    textAlign: "center",
    fontWeight: "700",
    letterSpacing: -2,
    lineHeight: 48,
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: -1,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
  },
});
