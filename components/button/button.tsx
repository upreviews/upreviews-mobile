import { GlassView } from "expo-glass-effect";
import { FC } from "react";
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import Text from "../text";
import { roundedStyle, sizeStyles, useAppearanceStyles } from "./config";
import { AppearanceVariant, RoundedVariant, SizeVariant } from "./types";

interface ButtonProps extends TouchableOpacityProps {
  size?: SizeVariant;
  rounded?: RoundedVariant;
  appearance?: AppearanceVariant;
  glassView?: boolean;
  children: string | React.ReactNode;
}
export function Button({
  size = "medium",
  rounded = "full",
  appearance = "default",
  glassView = true,
  children,
  ...props
}: ButtonProps) {
  const appearanceStyles = useAppearanceStyles();

  const Wrapper = glassView ? WithGlassView : WithoutGlassView;

  return (
    <TouchableOpacity activeOpacity={1} {...props}>
      <Wrapper
        style={[
          {
            alignItems: "center",
            justifyContent: "center",
            borderCurve: "continuous",
          },
          sizeStyles[size].view,
          roundedStyle[rounded],
          appearanceStyles[appearance].view,
        ]}
      >
        {typeof children === "string" ? (
          <Text
            style={[sizeStyles[size].text, appearanceStyles[appearance].text]}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </Wrapper>
    </TouchableOpacity>
  );
}

interface WrapperProps {
  children: React.ReactNode;
  style: StyleProp<ViewStyle>;
}
const WithGlassView: FC<WrapperProps> = ({ children, style }) => {
  return (
    <GlassView style={style} glassEffectStyle="clear" isInteractive>
      {children}
    </GlassView>
  );
};

const WithoutGlassView: FC<WrapperProps> = ({ children, style }) => {
  return <View style={style}>{children}</View>;
};
