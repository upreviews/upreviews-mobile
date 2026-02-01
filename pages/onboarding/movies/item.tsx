import { Button } from "@/components/button";
import { useColors } from "@/hooks/use-colors";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export function MovieItem() {
  const colors = useColors();

  return (
    <View style={{ width, position: "relative" }}>
      <View
        style={[StyleSheet.absoluteFill, { zIndex: 1, alignItems: "center" }]}
      >
        <Image
          source="https://media.themoviedb.org/t/p/original/icM0UMVdYf7FfrJPThbAjvQzYDC.jpg"
          style={[
            internalStyles.poster,
            { transform: [{ scale: 2 }], opacity: 0.2 },
          ]}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={100}
        />
      </View>
      <BlurView
        intensity={50}
        tint="prominent"
        style={[StyleSheet.absoluteFillObject, { zIndex: 2 }]}
      />
      <LinearGradient
        colors={[
          colors.background,
          "transparent",
          "transparent",
          colors.background,
        ]}
        style={[StyleSheet.absoluteFillObject, { zIndex: 3 }]}
      />
      <View style={{ position: "relative", zIndex: 4 }}>
        <Image
          source="https://media.themoviedb.org/t/p/original/icM0UMVdYf7FfrJPThbAjvQzYDC.jpg"
          style={internalStyles.poster}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={100}
        />
        <View style={{ flexDirection: "row", padding: 20, gap: 12 }}>
          <Button style={{ flex: 1 }}>No</Button>
          <Button style={{ flex: 1 }}>Yes</Button>
        </View>
      </View>
    </View>
  );
}

const internalStyles = StyleSheet.create({
  poster: {
    width: "50%",
    aspectRatio: 2 / 3,
    borderRadius: 24,
    marginTop: 20,
    alignSelf: "center",
  },
});
