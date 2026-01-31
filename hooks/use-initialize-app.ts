import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export function useInitializeApp() {
  const [fontsLoaded] = useFonts({
    phosphor: require("../assets/fonts/phosphor/phosphor.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return { isReady: fontsLoaded };
}
