import { ThemeProvider } from "@shopify/restyle";
import { Stack } from "expo-router";
import theme from "@/theme";

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)"/>
        <Stack.Screen name="(main)"/>
      </Stack>
    </ThemeProvider>
  );
}
