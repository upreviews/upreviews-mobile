import { PhosphorIcon } from "@/assets/icon";
import { useColors } from "@/hooks/use-colors";
import React, { useCallback, useMemo, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInputProps } from "./text-input.types";

export const useTextInput = (props: TextInputProps) => {
  const { iconBefore, iconAfter, secureTextEntry } = props;
  const [showPassword, setShowPassword] = useState(false);
  const colors = useColors();

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const renderIcon = useCallback((icon: string | React.ReactNode) => {
    if (!icon) return null;

    if (typeof icon === "string") {
      return (
        <View style={styles.iconWrapper}>
          <PhosphorIcon
            name={icon as any}
            size={20}
            color={colors.mutedForeground}
          />
        </View>
      );
    }

    return icon;
  }, []);

  const prefixIcon = useMemo(() => {
    if (iconBefore) return renderIcon(iconBefore);
    if (secureTextEntry) return renderIcon("LockSimple");
    return undefined;
  }, [iconBefore, secureTextEntry, renderIcon]);

  const suffixIcon = useMemo(() => {
    if (iconAfter) return renderIcon(iconAfter);

    if (secureTextEntry) {
      const eyeIcon = (
        <TouchableOpacity
          onPress={() => {
            console.log(
              "Eye icon pressed! Current showPassword:",
              showPassword,
            );
            togglePasswordVisibility();
          }}
          style={styles.iconWrapper}
          activeOpacity={0.7}
        >
          <PhosphorIcon
            name={showPassword ? "Eye" : "EyeClosed"}
            size={20}
            color={colors.mutedForeground}
          />
        </TouchableOpacity>
      );
      return eyeIcon;
    }

    return undefined;
  }, [
    iconAfter,
    secureTextEntry,
    showPassword,
    togglePasswordVisibility,
    renderIcon,
  ]);

  const finalSecureTextEntry = secureTextEntry && !showPassword;

  return {
    prefixIcon,
    suffixIcon,
    secureTextEntry: finalSecureTextEntry,
  };
};

const styles = StyleSheet.create({
  iconWrapper: {
    height: 52,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
