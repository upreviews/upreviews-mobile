import { Stack } from "expo-router";
import { Fragment } from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <Fragment>
      <StatusBar barStyle="default" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(protected)" />
        <Stack.Screen name="(public)" />
      </Stack>
    </Fragment>
  );
}
