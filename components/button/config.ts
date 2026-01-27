import { TextStyle, ViewStyle } from "react-native";
import { AppearanceVariant, RoundedVariant, SizeVariant } from "./types";

type ButtonStyle = { view: ViewStyle; text: TextStyle };

export const sizeStyles: Record<SizeVariant, ButtonStyle> = {
  small: {
    view: { paddingHorizontal: 6, height: 36 },
    text: { fontSize: 16 },
  },
  medium: {
    view: { paddingHorizontal: 12, height: 52 },
    text: { fontSize: 18, fontWeight: "500" },
  },
  large: {
    view: { paddingHorizontal: 16, height: 64 },
    text: { fontSize: 22, fontWeight: "500" },
  },
};

export const appearanceStyles: Record<AppearanceVariant, ButtonStyle> = {
  default: {
    view: { backgroundColor: "transparent" },
    text: { color: "#000000" },
  },
  primary: {
    view: { backgroundColor: "#e82251" },
    text: { color: "#ffffff" },
  },
  secondary: {
    view: { backgroundColor: "#6c757d" },
    text: { color: "#ffffff" },
  },
};

export const roundedStyle: Record<RoundedVariant, ViewStyle> = {
  none: { borderRadius: 0 },
  small: { borderRadius: 4 },
  medium: { borderRadius: 8 },
  large: { borderRadius: 16 },
  full: { borderRadius: 9999 },
};
