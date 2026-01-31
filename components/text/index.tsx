import { useColors } from "@/hooks/use-colors";
import React from "react";
import { Text as RNText, StyleSheet, TextProps } from "react-native";

interface TProps extends TextProps {}

const Text = React.forwardRef<RNText, TProps>(({ style, ...props }, ref) => {
  const colors = useColors();
  const aggregatedStyle = StyleSheet.flatten([
    { fontSize: 16, color: colors.foreground },
    style,
  ]);

  const weight = {
    "100": "DMSans-Thin",
    "200": "DMSans-ExtraLight",
    "300": "DMSans-Light",
    "400": "DMSans-Regular",
    "500": "DMSans-Medium",
    "600": "DMSans-SemiBold",
    "700": "DMSans-Bold",
    "800": "DMSans-ExtraBold",
    "900": "DMSans-Black",
    thin: "DMSans-Thin",
    ultralight: "DMSans-ExtraLight",
    light: "DMSans-Light",
    medium: "DMSans-Medium",
    semibold: "DMSans-SemiBold",
    demibold: "DMSans-SemiBold",
    normal: "DMSans-Regular",
    regular: "DMSans-Regular",
    condensed: "DMSans-Regular",
    bold: "DMSans-Bold",
    condensedBold: "DMSans-Bold",
    heavy: "DMSans-ExtraBold",
    black: "DMSans-Black",
  };

  return (
    <RNText
      ref={ref}
      style={[
        { fontFamily: weight[aggregatedStyle.fontWeight || "400"] },
        aggregatedStyle,
      ]}
      {...props}
    />
  );
});

Text.displayName = "Text";

export default Text;
