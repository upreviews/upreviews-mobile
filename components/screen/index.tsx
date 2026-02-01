import { useColors } from "@/hooks/use-colors";
import React, { ComponentPropsWithoutRef, ElementType } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "../header";

interface BaseProps {
  title?: string;
  safeareaTop?: boolean;
  safeareaBottom?: boolean;
  contentBeforeScrollView?: React.ReactNode;
  contentAfterScrollView?: React.ReactNode;
  headerRightContent?: React.ReactNode;
  showBackNavigation?: boolean;
}

type ScreenProps<C extends ElementType> = BaseProps & {
  as?: C;
} & Omit<ComponentPropsWithoutRef<C>, keyof BaseProps>;

export function Screen<C extends ElementType = typeof Animated.ScrollView>({
  title,
  safeareaTop = true,
  safeareaBottom = true,
  children,
  contentBeforeScrollView,
  contentAfterScrollView,
  headerRightContent,
  showBackNavigation,
  as,
  ...props
}: ScreenProps<C>) {
  const { top, bottom } = useSafeAreaInsets();
  const colors = useColors();

  const ScrollComponent = as || Animated.ScrollView;

  return (
    <View style={[styles.wrapper, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView
        style={[
          styles.container,
          safeareaTop && !title && !headerRightContent && { paddingTop: top },
          safeareaBottom && { paddingBottom: bottom },
        ]}
      >
        {(!!title || !!headerRightContent) && (
          <Header
            title={title}
            rightContent={headerRightContent}
            showBackNavigation={showBackNavigation}
          />
        )}
        {contentBeforeScrollView}
        <ScrollComponent
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="handled"
          automaticallyAdjustKeyboardInsets
          {...props}
        >
          {children}
        </ScrollComponent>
        {contentAfterScrollView}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
