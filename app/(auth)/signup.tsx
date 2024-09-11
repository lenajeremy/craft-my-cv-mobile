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
import { useRegisterMutation } from "@/http/authApi";


export default function Signup() {
  const { colors } = useTheme<Theme>();
  const [register, { isLoading }] = useRegisterMutation();

  const [signupForm, setSignupForm] = React.useState({
    name: "",
    email: "",
    confPassword: "",
    password: "",
    acceptsTerms: false,
  });

  const handleSignUp = async () => {
    try {

    const res = await register({
      name: signupForm.name,
      email: signupForm.email,
      password: signupForm.password,
      conf_password: signupForm.confPassword,
      accept_t_and_c: signupForm.acceptsTerms,
    }).unwrap();

    console.log(JSON.stringify(res))
    
  } catch (error) {
    console.error(error)
    // Burnt.toast({ message: error.data.data.error, preset: 'error', title: "Error logging in"})
  }
  };

  function onChangeText(key: string, value: string | boolean) {
    setSignupForm((form) => ({
      ...form,
      [key]: value,
    }));
  }

  return (
    <ScreenContainer ScreenHeaderComponent={<AuthScreenHeader />} scrollable>
      <Box my="m" px="s">
        <Text variant="h1">Create an account</Text>
        <Box gap="m" mt="default">
          <TextInput
            showLabel
            label="Full name"
            variant="outlined"
            value={signupForm.name}
            onChangeText={(t) => onChangeText("name", t)}
            PrefixElement={<UserProfileSVG />}
            style={{ lineHeight: 20 }}
            placeholder="John Doe"
          />

          <TextInput
            showLabel
            label="Email Address"
            variant="outlined"
            value={signupForm.email}
            onChangeText={(t) => onChangeText("email", t)}
            PrefixElement={<LoginEnvelopeSVG />}
            style={{ lineHeight: 20 }}
            placeholder="johndoe@example.com"
          />

          <TextInput
            secureTextEntry
            showLabel
            value={signupForm.password}
            onChangeText={(t) => onChangeText("password", t)}
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
            value={signupForm.confPassword}
            onChangeText={(t) => onChangeText("confPassword", t)}
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
            value={signupForm.acceptsTerms}
            onValueChange={(c) => onChangeText("acceptsTerms", c)}
            color={!signupForm.acceptsTerms ? colors.mainText : colors.primary}
          />
          <Text style={{ flex: 1, lineHeight: 24 }}>
            I read and agreed to the{" "}
            <Link
              href="/reset-password/request"
              style={{ marginVertical: 12, textAlign: "right" }}
            >
              <Text color="primary">Terms and conditions</Text>
            </Link>{" "}
            and{" "}
            <Link
              href="/reset-password/request"
              style={{ marginVertical: 12, textAlign: "right" }}
            >
              <Text color="primary">Privacy Policy</Text>
            </Link>
          </Text>
        </Box>

        <Button
          onPress={handleSignUp}
          isLoading={isLoading}
          disabled={!signupForm.acceptsTerms}
          buttonStyles={{ marginVertical: 10 }}
          variant="contained"
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
              variant="outlined"
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
              variant="outlined"
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
