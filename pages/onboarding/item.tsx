import Text from "@/components/text";
import { Dimensions, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardingData } from "./types";

const { width, height } = Dimensions.get("window");

interface OnboardingItemProps {
  data: OnboardingData;
}
export function OnboardingItem({ data }: OnboardingItemProps) {
  return (
    <View style={{ width, height }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}></View>
        <View style={styles.content}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>
        <View style={{ height: 140 }} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 32,
    gap: 14,
  },
  title: {
    fontSize: 42,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: -2,
    lineHeight: 48,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
  },
});
