import React from "react";
import { Redirect } from "expo-router";

export default function App() {
  const isLoggedIn = false;
  const isFirstTime = true;

  if (isFirstTime) {
    return <Redirect href="/onboarding" />;
  } else if (isLoggedIn) {
    return <Redirect href="/home" />;
  } else {
    return <Redirect href="/signup" />;
  }
}
