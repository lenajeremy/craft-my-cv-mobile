import * as React from "react";
import Text from "@/components/ui/text";
import Checkbox from "expo-checkbox";
import ScreenContainer from "@/components/ui/screen-container";
import AuthScreenHeader from "@/components/auth/screen-header";
import Box from "@/components/ui/box";
import TextInput from "@/components/ui/textinput";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import Button from "@/components/ui/button";
import GoogleSVG from "@/assets/icons/google";
import LinkedInSVG from "@/assets/icons/linkedin";
import LoginEnvelopeSVG from "@/assets/icons/login-envelope";
import LockSVG from "@/assets/icons/lock";
import { Pressable } from "react-native";
import EyeSVG from "@/assets/icons/eye";
import { Link } from "expo-router";
import UserProfileSVG from "@/assets/icons/user";

export default function Signup() {
  const { colors, spacing } = useTheme<Theme>();
  const [checked, setChecked] = React.useState(false);

  return (
    <ScreenContainer ScreenHeaderComponent={<AuthScreenHeader />} scrollable>
      <Box my="m" px="s">
        <Text variant="h1">Create an account</Text>
        <Box gap="m" mt="default">
          <TextInput
            showLabel
            label="Full name"
            variant="outlined"
            PrefixElement={<UserProfileSVG />}
            style={{ lineHeight: 20 }}
            placeholder="John Doe"
          />

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
            label="Password"
            variant="outlined"
            placeholder="Create a password"
            PrefixElement={<LockSVG />}
            SuffixElement={
              <Pressable style={{ padding: 4 }}>
                <EyeSVG />
              </Pressable>
            }
          />

          <TextInput
            secureTextEntry
            showLabel
            label="Confirm password"
            variant="outlined"
            placeholder="Confirm your password"
            PrefixElement={<LockSVG />}
            SuffixElement={
              <Pressable style={{ padding: 4 }}>
                <EyeSVG />
              </Pressable>
            }
          />
        </Box>

        <Box flexDirection="row" gap="s" my="m">
          <Checkbox
            value={checked}
            onValueChange={setChecked}
            color={!checked ? colors.mainText : colors.primary}
          />
          <Text style={{ flex: 1, lineHeight: 24 }}>
            I read and agreed to the{" "}
            <Link
              href="/reset-password"
              style={{ marginVertical: 12, textAlign: "right" }}
            >
              <Text color="primary">Terms and conditions</Text>
            </Link>{" "}
            and{" "}
            <Link
              href="/reset-password"
              style={{ marginVertical: 12, textAlign: "right" }}
            >
              <Text color="primary">Privacy Policy</Text>
            </Link>
          </Text>
        </Box>

        <Button
          onPress={() => {}}
          disabled = {!checked}
          buttonStyles={{ marginVertical: 10 }}
        >
          Sign Up
        </Button>
        <Box py="m" gap="m" alignItems="center">
          <Text>
            Already have an account?{" "}
            <Link href="/signin" style={{ color: colors.primary }}>
              Sign In
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
