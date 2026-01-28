import { useColors } from "@/hooks/use-colors";
import { Text, View } from "react-native";

export default function MoviesTab() {
  const colors = useColors();

  return (
    <View
      style={{
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: colors.foreground }}>Movies Tab</Text>
    </View>
  );
}
