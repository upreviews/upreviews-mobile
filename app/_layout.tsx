import { useAuthStore } from "@/stores/use-auth-store";
import { Stack } from "expo-router";
import { Fragment } from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {
  const { isAuthenticated } = useAuthStore();

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
