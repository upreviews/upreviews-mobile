import { TextInputProps as RNTextInputProps, ViewStyle } from "react-native";

export interface TextInputProps extends RNTextInputProps {
  iconBefore?: string | React.ReactNode;
  iconAfter?: string | React.ReactNode;
  label?: string;
  error?: string | false | null;
  containerStyle?: ViewStyle;
}
