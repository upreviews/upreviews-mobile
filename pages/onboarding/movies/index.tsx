import { Button } from "@/components/button";
import { Screen } from "@/components/screen";
import Text from "@/components/text";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import { styles } from "../styles";
import { MovieItem } from "./item";

export function OnboardingMoviesPageComponent() {
  return (
    <Screen
      as={Animated.FlatList}
      horizontal
      pagingEnabled
      contentBeforeScrollView={
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>Seen any of these?</Text>
          <Text style={styles.description}>
            Rate what you've watched — help us understand your taste.
          </Text>
        </View>
      }
      headerRightContent={
        <Button appearance="primary" size="small">
          Done
        </Button>
      }
      data={[1, 2, 3, 4]}
      renderItem={() => <MovieItem />}
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      showBackNavigation={false}
    />
  );
}
