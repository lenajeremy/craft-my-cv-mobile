import React from "react";
import { Redirect } from "expo-router";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { FONTS } from "@/constants";
import useLocalStore from "@/hooks/useLocalStore";

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [token] = useLocalStore<string>("token")
  const [hasSeenOnboarding] = useLocalStore<boolean>("hasSeenOnboarding")

  const isLoggedIn = token ? true : false;
  const isFirstTime = hasSeenOnboarding ? false : true;

  const [loaded, error] = useFonts(FONTS);

  React.useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  if (isFirstTime) {
    return <Redirect href="/onboarding" />;
  } else if (isLoggedIn) {
    return <Redirect href="/home" />;
  } else {
    return <Redirect href="/signin" />;
  }
}
