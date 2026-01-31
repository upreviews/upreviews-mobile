import { Button } from "@/components/button";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
    interpolate,
    SharedValue,
    useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { onboardingData } from "./data";

const { width } = Dimensions.get("window");

interface OnboardingCTAProps {
  scrollX: SharedValue<number>;
  handleNext: () => void;
  isLastIndex: boolean;
}
export function OnboardingCTA({
  scrollX,
  handleNext,
  isLastIndex,
}: OnboardingCTAProps) {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { bottom: bottom + 20 }]}>
      <View style={styles.dotsWrapper}>
        {onboardingData.map((_, index) => {
          return <Dot key={index} index={index} scrollX={scrollX} />;
        })}
      </View>

      <View style={styles.buttonsWrapper}>
        <Button style={{ flex: 1 }} appearance="primary" size="large">
          Get Started
        </Button>
        {!isLastIndex && (
          <Button style={{ flex: 1 }} size="large" onPress={handleNext}>
            Next
          </Button>
        )}
      </View>
    </View>
  );
}

const Dot = ({
  index,
  scrollX,
}: {
  index: number;
  scrollX: SharedValue<number>;
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    const dotWidth = interpolate(
      scrollX.value,
      inputRange,
      [10, 30, 10],
      "clamp",
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.4, 1, 0.4],
      "clamp",
    );

    return {
      width: dotWidth,
      opacity,
    };
  });

  return <Animated.View style={[styles.dot, animatedStyle]} />;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    padding: 20,
    gap: 10,
  },
  buttonsWrapper: {
    flexDirection: "row",
    gap: 10,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  dotsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 6,
  },
});
