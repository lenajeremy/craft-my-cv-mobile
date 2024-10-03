import LinkedInSVG from "@/assets/icons/linkedin";
import PenSVG from "@/assets/icons/pen";
import Box from "@/components/ui/box";
import Button from "@/components/ui/button";
import RadioButton from "@/components/ui/radio";
import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import { router, useLocalSearchParams } from "expo-router";
import * as React from "react";
import { Alert, Pressable } from "react-native";

export default function SelectInputMethod() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [inputMethod, setInputMethod] = React.useState<
    "linkedin" | "manual" | null
  >(null);
  const { colors } = useTheme<Theme>();

  return (
    <ScreenContainer
      showHeaderTitle
      headerTitle=""
      ScreenFooterComponent={
        <Button
          onPress={() => {
            if (inputMethod === "manual") {
              router.push({ pathname: "/resumes/[id]", params: { id } });
            } else {
              Alert.alert("Not yet available");
            }
          }}
          variant="contained"
        >
          Continue
        </Button>
      }
    >
      <Box gap="s">
        <Text variant="h1" style={{ width: "80%" }}>
          How Would You Like to Fill in Your Resume?
        </Text>
        <Text fontSize={16} lineHeight={24} style={{ width: "97%" }}>
          Choose to fetch your LinkedIn profile details or manually fill in your
          information.
        </Text>
      </Box>

      <Box py="l" gap="m">
        <Box
          borderRadius={16}
          p="m"
          borderColor={inputMethod === "linkedin" ? "primary" : "border"}
          borderWidth={1}
          style={{
            backgroundColor:
              inputMethod === "linkedin"
                ? "hsla(206, 62%, 95%, 1)"
                : "hsla(210, 25%, 98%, 1)",
            borderColor:
              inputMethod === "linkedin"
                ? "hsla(209, 62%, 50%, 1)"
                : colors.border,
          }}
        >
          <Pressable onPress={() => setInputMethod("linkedin")}>
            <Box flexDirection="row" alignItems="center">
              <Box gap="m" flex={1}>
                <LinkedInSVG />
                <Box flexDirection="row" alignItems="center" gap="xs">
                  <Text variant="h3">Import from LinkedIn</Text>
                  <Text
                    variant="h3"
                    fontSize={12}
                    font="Manrope-ExtraBold"
                    style={{
                      color: "white",
                      backgroundColor: "#D8B706",
                      paddingHorizontal: 6,
                      borderRadius: 6,
                      overflow: "hidden",
                    }}
                  >
                    PRO
                  </Text>
                </Box>
              </Box>
              <RadioButton
                checked={inputMethod === "linkedin"}
                onPress={() => {}}
                value=""
                inactiveColor="hsla(211, 25%, 84%, 1)"
                activeColor="hsla(209, 62%, 50%, 1)"
              />
            </Box>
          </Pressable>
        </Box>

        <Box
          borderRadius={16}
          p="m"
          borderColor={inputMethod === "manual" ? "primary" : "border"}
          borderWidth={1}
          style={{
            backgroundColor:
              inputMethod === "manual"
                ? "hsla(252, 100%, 96%, 1)"
                : "hsla(210, 25%, 98%, 1)",
            borderColor:
              inputMethod === "manual" ? colors.primary : colors.border,
          }}
        >
          <Pressable onPress={() => setInputMethod("manual")}>
            <Box flexDirection="row" alignItems="center">
              <Box gap="m" flex={1}>
                <PenSVG />
                <Text variant="h3">Fill Manually</Text>
              </Box>
              <RadioButton
                checked={inputMethod === "manual"}
                onPress={() => {}}
                value=""
                inactiveColor="hsla(211, 25%, 84%, 1)"
                activeColor={colors.primary}
              />
            </Box>
          </Pressable>
        </Box>
      </Box>
    </ScreenContainer>
  );
}
