import { useColors } from "@/hooks/use-colors";
import { StyleSheet } from "react-native";

export function useTextInputStyles() {
  const colors = useColors();

  return StyleSheet.create({
    inputContainer: {},
    inputLabel: {
      fontSize: 16,
      fontWeight: "500",
      marginBottom: 6,
    },
    inputWrapper: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1.5,
      borderColor: colors.surface2,
      borderRadius: 100,
      backgroundColor: colors.surface1,
      minHeight: 56,
      borderCurve: "continuous",
    },
    inputIcon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      paddingVertical: 12,
      fontSize: 16,
      fontFamily: "DMSans-Regular",
      fontWeight: "500",
      color: colors.foreground,
    },
    inputError: {
      borderColor: "#FF3B30",
    },
    fieldErrorText: {
      fontWeight: "600",
      color: "#FF3B30",
      fontSize: 14,
      marginTop: 4,
    },
    iconContainer: {
      height: "100%",
      aspectRatio: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
}
