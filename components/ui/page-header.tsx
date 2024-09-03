import { Pressable } from "react-native";
import Box from "./box";
import Text from "./text";
import { useRouter } from "expo-router";
import ArrowLeftSVG from "@/assets/icons/arrow-left";
import { useTheme } from "@shopify/restyle";
import { type Theme } from "@/theme";


export default function PageHeader({ title }: { title: string }) {
  const router = useRouter();
  const showBackButton = router.canGoBack();
  const { colors } = useTheme<Theme>();

  return (
    <Box
      py="default"
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
    >
      {showBackButton && (
        <Pressable onPress={router.back}>
          <ArrowLeftSVG height={26} width={26} color={colors.headingText} />
        </Pressable>
      )}

      <Text variant="h3">
        {title}
      </Text>

      <Box>{/* Empty box */}</Box>
    </Box>
  );
}
