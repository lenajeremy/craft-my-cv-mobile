import { ThemeProvider } from "@shopify/restyle";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import theme, { darkTheme } from "@/theme";
import { Provider } from "react-redux";
import store from "@/store";

export default function RootLayout() {
  const isDarkMode = useColorScheme() === "dark";
  const currentTheme = isDarkMode ? theme : theme;

  return (
    <Provider store={store}>
      <ThemeProvider theme={currentTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(main)" />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
