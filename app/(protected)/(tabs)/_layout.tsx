import { PhosphorIcon } from "@/assets/icon";
import { useColors } from "@/hooks/use-colors";
import {
  Icon,
  Label,
  NativeTabs,
  VectorIcon,
} from "expo-router/unstable-native-tabs";

export default function TabLayout() {
  const colors = useColors();

  return (
    <NativeTabs backBehavior="none" tintColor={colors.primary}>
      <NativeTabs.Trigger name="index">
        <Icon src={<VectorIcon family={PhosphorIcon} name="HouseSimple" />} />
        <Label>Home</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="movies">
        <Icon src={<VectorIcon family={PhosphorIcon} name="FilmReel" />} />
        <Label>Movies</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="tv">
        <Icon src={<VectorIcon family={PhosphorIcon} name="Television" />} />
        <Label>Series</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="corners">
        <Icon
          src={<VectorIcon family={PhosphorIcon} name="ChatTeardropText" />}
        />
        <Label>Corners</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="search" role="search">
        <Icon
          src={<VectorIcon family={PhosphorIcon} name="MagnifyingGlass" />}
        />
        <Label>Search</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
