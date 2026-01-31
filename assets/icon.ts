import { Icon } from "@expo/vector-icons/build/createIconSet";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import phosphorConfig from "./fonts/phosphor/selection.json";

type PhosphorIconConfig = typeof phosphorConfig;
type PhosphorIconName =
  PhosphorIconConfig["icons"][number]["properties"]["name"];

export const PhosphorIcon: Icon<PhosphorIconName, string> =
  createIconSetFromIcoMoon(phosphorConfig, "phosphor", "phosphor.ttf");
