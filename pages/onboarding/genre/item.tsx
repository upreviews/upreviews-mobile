import Text from "@/components/text";
import { useColors } from "@/hooks/use-colors";
import { Genre } from "@/types/movie";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface GenreItem {
  selected: boolean;
  onPress: () => void;
  data: Genre;
}
export function GenreItem({ selected, onPress, data }: GenreItem) {
  const colors = useColors();

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          { borderColor: selected ? colors.primary : colors.surface3 },
        ]}
      >
        <View
          style={[
            styles.radio,
            { borderColor: selected ? colors.primary : colors.surface3 },
          ]}
        >
          {selected && (
            <View
              style={[styles.radioInner, { backgroundColor: colors.primary }]}
            />
          )}
        </View>
        <View>
          <Text style={styles.title}>{data.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 12,
    borderWidth: 2,
    borderRadius: 100,
    borderCurve: "continuous",
  },
  radio: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  radioInner: {
    width: 20,
    height: 20,
    borderRadius: 50,
    opacity: 0.3,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
});
