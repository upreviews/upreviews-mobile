import { StyleSheet, Text, View } from "react-native";

export default function SettingsTab() {
  return (
    <View style={styles.container}>
      <Text>Settings Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
