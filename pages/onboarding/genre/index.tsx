import { Button } from "@/components/button";
import { Screen } from "@/components/screen";
import Text from "@/components/text";
import { Genre } from "@/types/movie";
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import { styles } from "../styles";
import { mockGenres } from "./data";
import { GenreItem } from "./item";

export function OnboardingGenrePageComponent() {
  const router = useRouter();
  const [selected, setSelected] = useState(new Set<number>());

  const handleSelect = useCallback(
    (id: number) => {
      setSelected((p) => {
        const prev = new Set(p);
        if (prev.has(id)) {
          prev.delete(id);
        } else {
          prev.add(id);
        }
        return prev;
      });
    },
    [setSelected],
  );

  const onContinue = () => router.push("/onboarding/movies");

  const buttonText = `Continue • ${selected.size} selected`;

  return (
    <Screen
      contentAfterScrollView={
        <View style={{ padding: 20 }}>
          <Button onPress={onContinue}>{buttonText}</Button>
        </View>
      }
      contentBeforeScrollView={
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>What are you into?</Text>
          <Text style={styles.description}>
            Pick a few movie genres you love.
          </Text>
        </View>
      }
      as={Animated.FlatList<Genre>}
      data={mockGenres}
      contentContainerStyle={{ padding: 20, gap: 5 }}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item: genre }) => (
        <GenreItem
          selected={selected.has(genre.id)}
          onPress={() => handleSelect(genre.id)}
          data={genre}
          key={genre.id}
        />
      )}
    />
  );
}
