import Text from "@/components/ui/text";
import MailSVG from "@/assets/icons/mail";
import Box from "@/components/ui/box";
import ScreenContainer from "@/components/ui/screen-container";
import Button from "@/components/ui/button";
import { router } from "expo-router";
import { openInbox } from "react-native-email-link";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";

function ConfirmRequestPasswordReset() {
  const { colors } = useTheme<Theme>();
  return (
    <ScreenContainer>
      <Box gap="default" alignItems="center" flex={1} pt="xl" mt="xl">
        <MailSVG />

        <Box gap="s" alignItems="center" width={"100%"}>
          <Text variant="h1">Check your mail</Text>
          <Text
            variant="body"
            textAlign="center"
            color="mutedText"
            style={{ width: "80%" }}
          >
            We've sent you an email with a link to reset your password.
          </Text>
        </Box>
        <Box width={"100%"} alignItems="center" mt="m" g="default">
          <Button
            buttonStyles={{ width: "85%" }}
            textStyle={{ fontWeight: "normal" }}
            onPress={openInbox}
          >
            Open Email App
          </Button>

          <Button
            buttonStyles={{ borderColor: colors.border, width: "60%", borderWidth: 1.5 }}
            textStyle={{
              fontWeight: "normal",
              color: colors.mainText,
            }}
            onPress={() => router.push("/reset-password/reset")}
            color={colors.mainBackground}
          >
            Resend Link
          </Button>
        </Box>
      </Box>
    </ScreenContainer>
  );
}

export default ConfirmRequestPasswordReset;
