import { useColors } from "@/hooks/use-colors";
import { TextStyle, ViewStyle } from "react-native";
import { AppearanceVariant, RoundedVariant, SizeVariant } from "./types";

type ButtonStyle = { view: ViewStyle; text: TextStyle };

export const sizeStyles: Record<SizeVariant, ButtonStyle> = {
  small: {
    view: { paddingHorizontal: 6, height: 36 },
    text: { fontSize: 16 },
  },
  medium: {
    view: { paddingHorizontal: 12, height: 56 },
    text: { fontSize: 18, fontWeight: "500" },
  },
  large: {
    view: { paddingHorizontal: 16, height: 64 },
    text: { fontSize: 20, fontWeight: "500" },
  },
};

export function useAppearanceStyles(): Record<AppearanceVariant, ButtonStyle> {
  const colors = useColors();

  return {
    default: {
      view: { backgroundColor: "transparent" },
      text: { color: colors.foreground },
    },
    primary: {
      view: { backgroundColor: colors.primary },
      text: { color: "#ffffff" },
    },
    secondary: {
      view: { backgroundColor: "#6c757d" },
      text: { color: "#ffffff" },
    },
  };
}

export const roundedStyle: Record<RoundedVariant, ViewStyle> = {
  none: { borderRadius: 0 },
  small: { borderRadius: 4 },
  medium: { borderRadius: 10 },
  large: { borderRadius: 16 },
  full: { borderRadius: 9999 },
};
