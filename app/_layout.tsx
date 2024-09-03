import { ThemeProvider } from "@shopify/restyle";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import theme, { darkTheme} from "@/theme";

export default function RootLayout() {
  const isDarkMode = useColorScheme() === 'dark';
  const currentTheme = isDarkMode ? darkTheme : theme;
  
  return (
    <ThemeProvider theme={currentTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)"/>
        <Stack.Screen name="(main)"/>
      </Stack>
    </ThemeProvider>
  );
}
