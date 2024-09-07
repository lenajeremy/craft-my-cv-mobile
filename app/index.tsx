import React from "react";
import { Redirect } from "expo-router";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { FONTS } from "@/constants";

SplashScreen.preventAutoHideAsync();


export default function App() {
  const isLoggedIn = true;
  const isFirstTime = false;
  
  const [loaded, error] = useFonts(FONTS);

  React.useEffect(() => {
    console.log(loaded, error)
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
