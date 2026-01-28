import { Stack } from "expo-router";

export default function SearchLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => null,
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
