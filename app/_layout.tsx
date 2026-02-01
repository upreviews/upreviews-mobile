import { useInitializeApp } from "@/hooks/use-initialize-app";
import { useAuthStore } from "@/stores/use-auth-store";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar, useColorScheme } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { isReady } = useInitializeApp();
  const { isAuthenticated } = useAuthStore();
  const colorScheme = useColorScheme();

  if (!isReady) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar barStyle="default" />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={isAuthenticated}>
          <Stack.Screen name="(protected)" />
        </Stack.Protected>
        <Stack.Protected guard={!isAuthenticated}>
          <Stack.Screen name="(public)" />
        </Stack.Protected>
      </Stack>
    </ThemeProvider>
  );
}
