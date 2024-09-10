import React from "react";
import { Redirect } from "expo-router";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { FONTS } from "@/constants";
import useLocalStore, { LOCAL_STORE_KEYS } from "@/hooks/useLocalStore";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { updateUser } from "@/store/userSlice";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [token] = useLocalStore<string>(LOCAL_STORE_KEYS.JWT_TOKEN);
  const [hasSeenOnboarding] = useLocalStore<boolean>(
    LOCAL_STORE_KEYS.HAS_SEEN_ONBOARDING
  );
  const [userId] = useLocalStore<string>(LOCAL_STORE_KEYS.USER_ID);

  const isLoggedIn = token ? true : false;
  const isFirstTime = hasSeenOnboarding ? false : true;

  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);


  React.useEffect(() => {
    if (userId) {
      dispatch(updateUser({ ...user, userId }));
    }
  }, [dispatch, user, userId]);

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
