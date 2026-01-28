import { useColors } from "@/hooks/use-colors";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabLayout() {
  const colors = useColors();

  return (
    <NativeTabs backBehavior="none" tintColor={colors.primary}>
      <NativeTabs.Trigger name="index">
        <Icon sf="house.fill" drawable="custom_android_drawable" />
        <Label>Home</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="movies">
        <Icon sf="gear" drawable="custom_settings_drawable" />
        <Label>Movies</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="tv">
        <Icon sf="gear" drawable="custom_settings_drawable" />
        <Label>Series</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="search" role="search">
        <Icon sf="gear" drawable="custom_settings_drawable" />
        <Label>Search</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
