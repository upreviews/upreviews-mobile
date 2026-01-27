import { Button } from "@/components/button";
import Text from "@/components/text";
import { StyleSheet, View } from "react-native";

export default function OnboardingPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Onboarding Page</Text>
      <Button size="large" appearance="primary" rounded="large">
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "400",
  },
});
