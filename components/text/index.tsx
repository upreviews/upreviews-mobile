import React from "react";
import { Text as RNText, StyleSheet, TextProps } from "react-native";

interface TProps extends TextProps {}

const Text = React.forwardRef<RNText, TProps>(({ style, ...props }, ref) => {
  const aggregatedStyle = StyleSheet.flatten([{ fontSize: 16 }, style]);

  return <RNText ref={ref} style={aggregatedStyle} {...props} />;
});

Text.displayName = "Text";

export default Text;
