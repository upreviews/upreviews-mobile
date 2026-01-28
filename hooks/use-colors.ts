import { colors } from "@/assets/colors";
import { useColorScheme } from "react-native";

export function useColors() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return isDarkMode ? colors.dark : colors.light;
}
