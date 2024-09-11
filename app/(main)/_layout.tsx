import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
      <Stack.Screen name="profile/index" />
      <Stack.Screen name="resumes/index" />
      <Stack.Screen name="cover-letters/index" />
      <Stack.Screen name="paywall-modal" options={{ presentation: "modal" }} />
      <Stack.Screen name="payment-options" options={{ presentation: "modal" }} />
    </Stack>
  );
}