import EyeSVG from "@/assets/icons/eye";
import LockSVG from "@/assets/icons/lock";
import Box from "@/components/ui/box";
import Button from "@/components/ui/button";
import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
import TextInput from "@/components/ui/textinput";
import { router } from "expo-router";

function ResetPassword() {
  return (
    <ScreenContainer showHeaderTitle headerTitle="">
      <Text variant="h1">Create a new password</Text>
      <Text
        variant="body"
        lineHeight={24}
        style={{ width: "95%" }}
        color="mutedText"
        mt="s"
      >
        Your new password must be different from previous used passwords
      </Text>

      <Box gap="m" my="l">
        <TextInput
          variant="outlined"
          showLabel
          label="New Password"
          PrefixElement={<LockSVG />}
          SuffixElement={<EyeSVG />}
          placeholder="Enter your new password"
        />

        <TextInput
          variant="outlined"
          showLabel
          label="Confirm new password"
          PrefixElement={<LockSVG />}
          SuffixElement={<EyeSVG />}
          placeholder="Confirm your new password"
        />
      </Box>
      <Button
        variant="contained"
        onPress={() => router.push("/(auth)/reset-password/confirm-reset")}
      >
        Continue
      </Button>
    </ScreenContainer>
  );
}

export default ResetPassword;
