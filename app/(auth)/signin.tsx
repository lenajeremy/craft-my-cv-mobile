import EyeSVG from "@/assets/icons/eye";
import GoogleSVG from "@/assets/icons/google";
import LinkedInSVG from "@/assets/icons/linkedin";
import LockSVG from "@/assets/icons/lock";
import LoginEnvelopeSVG from "@/assets/icons/login-envelope";
import AuthScreenHeader from "@/components/auth/screen-header";
import Box from "@/components/ui/box";
import Button from "@/components/ui/button";
import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
import TextInput from "@/components/ui/textinput";
import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import { Link } from "expo-router";
import { Pressable } from "react-native";

export default function SignIn() {
  const { colors } = useTheme<Theme>();

  return (
    <ScreenContainer ScreenHeaderComponent={<AuthScreenHeader />}>
      <Box my="xl" px="s">
        <Text variant="h1">Sign In</Text>
        <Box gap="m" mt="default">
          <TextInput
            showLabel
            label="Email Address"
            variant="outlined"
            PrefixElement={<LoginEnvelopeSVG />}
            style={{ lineHeight: 20 }}
            placeholder="johndoe@example.com"
          />
          <TextInput
            secureTextEntry
            showLabel
            label="Email Address"
            variant="outlined"
            placeholder="Enter your password"
            PrefixElement={<LockSVG />}
            SuffixElement={
              <Pressable style={{ padding: 4 }}>
                <EyeSVG />
              </Pressable>
            }
          />
        </Box>
        <Link
          href="/reset-password/request"
          style={{ marginVertical: 12, textAlign: "right" }}
        >
          <Text color="primary">Forgot Password?</Text>
        </Link>

        <Button
          onPress={() => {}}
          disabled
          buttonStyles={{ marginVertical: 10 }}
        >
          Sign In
        </Button>
        <Box py="l" gap="l" alignItems="center">
          <Text>
            Don't have an account?{" "}
            <Link href="/signup" style={{ color: colors.primary }}>
              Sign Up
            </Link>
          </Text>

          <Text>or</Text>

          <Box style={{ width: "100%" }} gap="m">
            <Button
              textStyle={{
                color: colors.mainText,
                fontWeight: "normal",
              }}
              buttonStyles={{
                borderColor: colors.border,
              }}
              color={colors.mainBackground}
              onPress={() => {}}
              icon={<LinkedInSVG />}
            >
              Continue With LinkedIn
            </Button>
            <Button
              textStyle={{
                color: colors.mainText,
                fontWeight: "normal",
              }}
              buttonStyles={{
                borderColor: colors.border,
              }}
              color={colors.mainBackground}
              onPress={() => {}}
              icon={<GoogleSVG />}
            >
              Continue With Google
            </Button>
          </Box>
        </Box>
      </Box>
    </ScreenContainer>
  );
}
