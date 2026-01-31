import { Stack } from "expo-router";

export default function SearchLayout() {
  return (
    <Stack
      screenOptions={{
        headerBlurEffect: "prominent",
        headerSearchBarOptions: {
          placement: "automatic",
          placeholder: "Search",
          onChangeText: () => {},
          autoFocus: true,
        },
      }}
    />
  );
}
