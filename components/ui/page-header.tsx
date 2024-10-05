import React from "react";
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
      py="m"
      alignItems="center"
      flexDirection="row"
      justifyContent={showBackButton ? "space-between" : "center"}
    >
      {showBackButton && (
        <Pressable onPress={router.back}>
          <ArrowLeftSVG height={24} width={24} color={colors.headingText} />
        </Pressable>
      )}

      <Text variant="h3">{title}</Text>

      {showBackButton && (
        <Pressable onPress={router.back} disabled style={{ opacity: 0 }}>
          <ArrowLeftSVG height={24} width={24} color={colors.headingText} />
        </Pressable>
      )}
    </Box>
  );
}
