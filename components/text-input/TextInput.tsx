import { useColors } from "@/hooks/use-colors";
import React from "react";
import { TextInput as RNTextInput, View } from "react-native";
import Text from "../text";
import { useTextInputStyles } from "./styles";
import { useTextInput } from "./text-input.hook";
import { TextInputProps } from "./text-input.types";

export const TextInput = React.forwardRef<RNTextInput, TextInputProps>(
  (props, ref) => {
    const { prefixIcon, suffixIcon, secureTextEntry } = useTextInput(props);
    const { label, error, style, containerStyle, ...others } = props;
    const styles = useTextInputStyles();
    const colors = useColors();

    return (
      <View style={[styles.inputContainer, containerStyle]}>
        {!!label && <Text style={styles.inputLabel}>{label}</Text>}
        <View
          style={[
            styles.inputWrapper,
            !prefixIcon && { paddingLeft: 20 },
            !suffixIcon && { paddingRight: 20 },
            !!error && styles.inputError,
          ]}
        >
          {prefixIcon}
          <RNTextInput
            {...others}
            ref={ref}
            style={[styles.input, style]}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={colors.mutedForeground}
          />
          {suffixIcon && <View>{suffixIcon}</View>}
        </View>
        {!!error && <Text style={styles.fieldErrorText}>{error}</Text>}
      </View>
    );
  },
);

TextInput.displayName = "TextInput";
