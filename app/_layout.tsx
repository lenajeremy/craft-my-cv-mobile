import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="Home/index" />
      <Stack.Screen name="Signup/index" />
    </Stack>
  );
}
