import React from "react";
import { Redirect } from "expo-router";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { FONTS } from "@/constants";
import useLocalStore, { LOCAL_STORE_KEYS } from "@/hooks/useLocalStore";
import { useAppDispatch } from "@/hooks/redux";
import { updateUser } from "@/store/userSlice";
import { useLazyGetUserDetailsQuery } from "@/http/userApi";
import ScreenContainer from "@/components/ui/screen-container";
import { ActivityIndicator } from "react-native";


SplashScreen.preventAutoHideAsync();


export default function App() {
  const {
    value: token,
    loaded: tokenLoaded,
  } = useLocalStore<string>(LOCAL_STORE_KEYS.JWT_TOKEN);
  const {
    value: hasSeenOnboarding,
    loaded: hasSeenOnboardingLoaded,
  } = useLocalStore<boolean>(LOCAL_STORE_KEYS.HAS_SEEN_ONBOARDING);


  const [authState, setAuthState] = React.useState({
    isLoading: true,
    isLoggedIn: false,
    isFirstTime: false,
  });

  const dispatch = useAppDispatch();

  const [getUserDetails] =
    useLazyGetUserDetailsQuery();

  const [loaded, error] = useFonts(FONTS);

  React.useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  React.useEffect(() => {
    (async function () {
      if (tokenLoaded && hasSeenOnboardingLoaded && token) {
        try {
          const result = await getUserDetails({ token }).unwrap();
          console.log(JSON.stringify(result, null, 3));
          dispatch(
            updateUser({
              token,
              email: result.data.email,
              name: result.data.name,
              userId: result.data.id,
              plan: result.data.plan,
              hasValidSubscription: result.data.hasValidSubscription,
            })
          );
          setAuthState({
            isLoading: false,
            isLoggedIn: true,
            isFirstTime: false,
          });
        } catch (error) {
          console.log(error);
          setAuthState({
            isLoading: false,
            isLoggedIn: false,
            isFirstTime: !hasSeenOnboarding,
          });
        }
      } else if (tokenLoaded && hasSeenOnboardingLoaded && !token) {
        setAuthState({
          isLoading: false,
          isLoggedIn: false,
          isFirstTime: !hasSeenOnboarding,
        });
      }
    })();
  }, [token, getUserDetails, hasSeenOnboarding, tokenLoaded, hasSeenOnboardingLoaded, dispatch]);

  if (!loaded && !error) {
    return null;
  }

  if (authState.isLoading) {
    return (
      <ScreenContainer
        contentContainerProps={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator />
      </ScreenContainer>
    );
  }

  if (authState.isFirstTime) {
    return <Redirect href="/onboarding" />;
  } else if (authState.isLoggedIn) {
    return <Redirect href="/home" />;
  } else {
    return <Redirect href="/signin" />;
  }
}
