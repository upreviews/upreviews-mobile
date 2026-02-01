import { useColors } from "@/hooks/use-colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { FC } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "../text";

interface IProps {
  title?: string;
  rightContent?: React.ReactNode;
}
export const Header: FC<IProps> = ({ title, rightContent }) => {
  const { top } = useSafeAreaInsets();
  const colors = useColors();

  return (
    <View
      style={{
        paddingTop: top + 10,
        flexDirection: "row",
        gap: 12,
        backgroundColor: colors.background,
      }}
    >
      <Link href="../">
        <View style={styles.container}>
          <Ionicons
            name={Platform.select({
              ios: "chevron-back",
              android: "arrow-back",
            })}
            size={24}
            color={colors.foreground}
          />
          {title && <Text style={styles.title}>{title}</Text>}
        </View>
      </Link>
      {!!rightContent && (
        <View
          style={{ marginLeft: "auto", paddingRight: 20, alignSelf: "center" }}
        >
          {rightContent}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
