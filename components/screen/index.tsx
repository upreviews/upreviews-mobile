import { useColors } from "@/hooks/use-colors";
import React, { FC } from "react";
import {
    KeyboardAvoidingView,
    ScrollViewProps,
    StyleSheet,
    View,
} from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "../header";

interface IProps extends ScrollViewProps {
  children: React.ReactNode;
  title?: string;
  safeareaTop?: boolean;
  safeareaBottom?: boolean;
  contentBeforeScrollView?: React.ReactNode;
  contentAfterScrollView?: React.ReactNode;
  headerRightContent?: React.ReactNode;
  showBottomNav?: boolean;
}
export const Screen: FC<IProps> = ({
  title,
  scrollEnabled = true,
  safeareaTop = true,
  safeareaBottom = true,
  children,
  contentBeforeScrollView,
  contentAfterScrollView,
  headerRightContent,
  showBottomNav = false,
  ...props
}) => {
  const { top, bottom } = useSafeAreaInsets();
  const colors = useColors();

  return (
    <View style={[styles.wrapper, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView
        style={[
          styles.container,
          safeareaTop && !title && { paddingTop: top },
          !showBottomNav && safeareaBottom && { paddingBottom: bottom },
        ]}
      >
        {(!!title || !!headerRightContent) && (
          <Header title={title} rightContent={headerRightContent} />
        )}
        {contentBeforeScrollView}
        <Animated.ScrollView
          scrollEnabled={scrollEnabled}
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="handled"
          automaticallyAdjustKeyboardInsets
          {...props}
        >
          {children}
        </Animated.ScrollView>
        {contentAfterScrollView}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
