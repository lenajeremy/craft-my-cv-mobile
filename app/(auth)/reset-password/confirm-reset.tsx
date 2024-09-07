import Box from "@/components/ui/box";
import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
import { router } from "expo-router";
import Button from "@/components/ui/button";
import PasswordResetSuccessSVG from "@/assets/icons/password-reset-success";

function ConfirmPasswordReset() {
  return (
    <ScreenContainer>
      <Box gap="default" alignItems="center" flex={1} pt="xl" mt="xl">
        <PasswordResetSuccessSVG />

        <Box gap="s" alignItems="center" width={"100%"}>
          <Text variant="h1">Password Changed</Text>
          <Text
            variant="body"
            textAlign="center"
            color="mutedText"
            style={{ width: "80%" }}
          >
            Your password has been reset successfully.
          </Text>
        </Box>
        <Box width={"100%"} alignItems="center" mt="m" g="default">
          <Button
            buttonStyles={{ width: "85%" }}
            textStyle={{ fontWeight: "normal" }}
            onPress={() => router.replace('/signin')}
          >
            Go to Login
          </Button>
        </Box>
      </Box>
    </ScreenContainer>
  );
}

export default ConfirmPasswordReset;
