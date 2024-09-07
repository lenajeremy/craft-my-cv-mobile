import LoginEnvelopeSVG from "@/assets/icons/login-envelope";
import AuthScreenHeader from "@/components/auth/screen-header";
import Box from "@/components/ui/box";
import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
import TextInput from "@/components/ui/textinput";

export default function SignIn() {
  return (
    <ScreenContainer ScreenHeaderComponent={<AuthScreenHeader />}>
      <Box my="m">
        <Text variant="h1">Sign In</Text>
        <TextInput showLabel label="Email Address" variant="outlined" PrefixElement = {<LoginEnvelopeSVG />}  />
        <TextInput showLabel label="Email Address" variant="underline" PrefixElement = {<LoginEnvelopeSVG />}  />
      </Box>
    </ScreenContainer>
  );
}
