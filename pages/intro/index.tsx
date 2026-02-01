import { useColors } from "@/hooks/use-colors";
import { useRef, useState } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { IntroCTA } from "./cta";
import { introData } from "./data";
import { IntroItem } from "./item";
import { IntroData } from "./types";

export function IntroPageComponent() {
  const colors = useColors();
  const flatListRef = useRef<Animated.FlatList<IntroData>>(null);
  const scrollX = useSharedValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const handleNext = () => {
    if (currentIndex < introData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    }
  };

  return (
    <View
      style={{
        backgroundColor: colors.background,
        flex: 1,
        position: "relative",
      }}
    >
      <IntroCTA
        scrollX={scrollX}
        isLastIndex={currentIndex === introData.length - 1}
        handleNext={handleNext}
      />
      <Animated.FlatList
        ref={flatListRef}
        pagingEnabled
        horizontal
        scrollEventThrottle={16}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
        data={introData}
        onScroll={onScroll}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <IntroItem data={item} />}
      />
    </View>
  );
}
