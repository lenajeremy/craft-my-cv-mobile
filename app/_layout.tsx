import { ThemeProvider } from "@shopify/restyle";
import { Stack } from "expo-router";
import theme from "@/theme";

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
    <Stack>
      <Stack.Screen name="Home/index" />
      <Stack.Screen name="Signup/index" />
    </Stack>
    </ThemeProvider>
  );
}
