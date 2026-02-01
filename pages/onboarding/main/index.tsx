import { Button } from "@/components/button";
import Text from "@/components/text";
import { Link } from "expo-router";
import { View } from "react-native";
import Animated, {
  Easing,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles";

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
