import LoginEnvelopeSVG from "@/assets/icons/login-envelope";
import Button from "@/components/ui/button";
import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
import TextInput from "@/components/ui/textinput";
import { router } from "expo-router";

function RequestPasswordReset() {
  return (
    <ScreenContainer showHeaderTitle headerTitle="">
      <Text variant="h1">Reset Password</Text>
      <Text
        variant="body"
        lineHeight={24}
        style={{ width: "95%" }}
        color="mutedText"
        mt="s"
      >
        Please enter the email address associated with your account. And we will
        send you an email with an OTP to reset your password
      </Text>

      <TextInput
        variant="outlined"
        showLabel
        label="Email Address"
        PrefixElement={<LoginEnvelopeSVG />}
        placeholder="johndoe@crafymycv.com"
        containerProps={{ my: "l" }}
      />
      <Button
        variant="contained"
        onPress={() => router.push("/(auth)/reset-password/confirm-request")}
      >
        Continue
      </Button>
    </ScreenContainer>
  );
}

export default RequestPasswordReset;
