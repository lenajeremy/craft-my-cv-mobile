import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signin" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="reset-password/request" />
      <Stack.Screen name="reset-password/reset" />
      <Stack.Screen name="reset-password/confirm-request" />
      <Stack.Screen name="reset-password/confirm-reset" />
    </Stack>
  );
}