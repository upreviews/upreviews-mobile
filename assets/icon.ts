import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import phosphorConfig from "./fonts/phosphor/selection.json";

export const PhosphorIcon = createIconSetFromIcoMoon(
  phosphorConfig,
  "phosphor",
  "phosphor.ttf",
);
