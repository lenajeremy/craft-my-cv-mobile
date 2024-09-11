import Box from "@/components/ui/box";
import Text from "@/components/ui/text";
import ScreenContainer from "@/components/ui/screen-container";
import { Link, router } from "expo-router";
import GemstoneSVG from "@/assets/icons/gemstone";
import { Image, Pressable } from "react-native";
import CheckboxSVG from "@/assets/icons/checkbox";
import Button from "@/components/ui/button";

export default function PaywallModal() {
  return (
    <ScreenContainer>
      <Box py="default">
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            flexDirection="row"
            alignItems="center"
            gap="xs"
            alignSelf="flex-start"
            borderRadius={16}
            style={{
              backgroundColor: "#EFEBFF",
              paddingHorizontal: 8,
              paddingVertical: 6,
            }}
          >
            <GemstoneSVG width={16} height={16} />
            <Text color="primary" font="Manrope-SemiBold">
              Try Premium
            </Text>
          </Box>
          <Pressable onPress={() => router.back()}>
            <Text>x</Text>
          </Pressable>
        </Box>

        <Box my="l" gap="m">
          <Text variant="h1" lineHeight={36}>
            Unlock Full Access to Build Your Perfect Resume
          </Text>
          <Image
            source={require("@/assets/images/resume-on-laptop.png")}
            style={{ width: 150, height: 150, alignSelf: "center" }}
          />
          <Box>
            <Promotion
              text={
                "Unlimited access to all premium templates, including exclusive designs."
              }
            />
            <Promotion
              text={
                "Advanced AI to fully optimize resumes, including tailored content, keyword optimization, and industry-specific guidance."
              }
            />
            <Promotion
              text={
                "Access insights on resume views, downloads, and keyword match rates."
              }
            />
          </Box>

          <Button
            buttonStyles={{ marginTop: 10 }}
            textStyle={{ fontFamily: "Manrope-SemiBold" }}
            variant="contained"
            onPress={() => {}}
          >
            Start Free Trial
          </Button>

          <Text
            textAlign="center"
            color="mutedText"
            style={{ width: "80%", alignSelf: "center" }}
          >
            Upgrade to our Pro or Premium plans for unlimited resume downloads
          </Text>
        </Box>
      </Box>
    </ScreenContainer>
  );
}

function Promotion(props: { text: string; bottom?: boolean }) {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      gap="default"
      px="s"
      py="m"
      borderBottomWidth={props.bottom ? 0 : 1}
      borderBottomColor="border"
    >
      <CheckboxSVG />
      <Box pr="s" flex={1}>
        <Text variant="title" fontSize={17}>{props.text}</Text>
      </Box>
    </Box>
  );
}
