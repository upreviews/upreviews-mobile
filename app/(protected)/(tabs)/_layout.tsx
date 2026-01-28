import { useColors } from "@/hooks/use-colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
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
        <Icon src={<VectorIcon family={AntDesign} name="home" />} />
        <Label>Home</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="movies">
        <Icon
          src={<VectorIcon family={MaterialCommunityIcons} name="movie-roll" />}
        />
        <Label>Movies</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="tv">
        <Icon
          src={
            <VectorIcon
              family={MaterialCommunityIcons}
              name="television-classic"
            />
          }
        />
        <Label>Series</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="search" role="search">
        <Icon src={<VectorIcon family={Octicons} name="search" />} />
        <Label>Search</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
