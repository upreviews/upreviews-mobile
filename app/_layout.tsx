import { useInitializeApp } from "@/hooks/use-initialize-app";
import { useAuthStore } from "@/stores/use-auth-store";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Fragment } from "react";
import { StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { isReady } = useInitializeApp();
  const { isAuthenticated } = useAuthStore();

  if (!isReady) {
    return null;
  }

  return (
    <Fragment>
      <StatusBar barStyle="default" />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={isAuthenticated}>
          <Stack.Screen name="(protected)" />
        </Stack.Protected>
        <Stack.Protected guard={!isAuthenticated}>
          <Stack.Screen name="(public)" />
        </Stack.Protected>
      </Stack>
    </Fragment>
  );
}
