export default {
  expo: {
    name: "UPreviews",
    slug: "upreviews-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "upreviews",
    owner: "upreviews",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    splash: {
      image: "./assets/images/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "net.upreviews.app",
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
      package: "net.upreviews.app",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      "expo-apple-authentication",
      [
        "expo-font",
        {
          fonts: [
            "./assets/fonts/dm-sans/DMSans-Thin.ttf",
            "./assets/fonts/dm-sans/DMSans-ExtraLight.ttf",
            "./assets/fonts/dm-sans/DMSans-Light.ttf",
            "./assets/fonts/dm-sans/DMSans-Regular.ttf",
            "./assets/fonts/dm-sans/DMSans-Medium.ttf",
            "./assets/fonts/dm-sans/DMSans-Semibold.ttf",
            "./assets/fonts/dm-sans/DMSans-Bold.ttf",
            "./assets/fonts/dm-sans/DMSans-ExtraBold.ttf",
            "./assets/fonts/dm-sans/DMSans-Black.ttf",
          ],
        },
      ],
    ],
    extra: {
      eas: {
        projectId: "e5bfd962-188b-4f74-aa1b-b3d25d940ae9",
      },
      apiUrl: process.env.EXPO_PUBLIC_API_URL,
      googleWebClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
      googleAndroidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
      googleIosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
    },
    experiments: {
      typedRoutes: true,
    },
  },
};
