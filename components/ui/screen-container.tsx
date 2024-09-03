import { SafeAreaView, StatusBar } from "react-native";
import { useTheme } from "@shopify/restyle";
import { type Theme } from "@/theme";
import { useColorScheme } from "react-native";


export default function ScreenContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { colors } = useTheme<Theme>();
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.mainBackground }}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      {children}
    </SafeAreaView>
  );
}
