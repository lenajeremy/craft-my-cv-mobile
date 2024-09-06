import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { useTheme } from "@shopify/restyle";
import { type Theme } from "@/theme";
import { useColorScheme } from "react-native";
import PageHeader from "./page-header";
import Box from "./box";

type ScreenContainerProps = {
  children: React.ReactNode;
  scrollable?: boolean;
  showHeaderTitle?: boolean;
  headerTitle?: string;
  ScreenHeaderComponent?: React.ReactNode;
  ScreenFooterComponent?: React.ReactNode;
  contentContainerProps?: React.ComponentProps<typeof Box>;
};

export default function ScreenContainer(props: ScreenContainerProps) {
  const { colors } = useTheme<Theme>();
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.mainBackground }}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <Box px="default">
          {/* Rendering appropriate header */}
          {props.ScreenHeaderComponent
            ? props.ScreenHeaderComponent
            : props.showHeaderTitle && (
                <PageHeader title={props.headerTitle || ""} />
              )}
        </Box>

        {/* should screen content scroll? */}
        {props.scrollable ? (
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Box px="default" flex={1} {...props.contentContainerProps}>
              {props.children}
            </Box>
          </ScrollView>
        ) : (
          <Box px="default" flex={1} {...props.contentContainerProps}>
            {props.children}
          </Box>
        )}
        {<Box px="default">{props.ScreenFooterComponent}</Box>}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
