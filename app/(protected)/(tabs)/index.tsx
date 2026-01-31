import Text from "@/components/text";
import { useColors } from "@/hooks/use-colors";
import { View } from "react-native";

export default function HomeTab() {
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
      <Text style={{ color: colors.foreground }}>Home</Text>
    </View>
  );
}
