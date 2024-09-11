import * as React from "react";
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
import { Link, router } from "expo-router";
import { ActivityIndicator, Pressable } from "react-native";
import { useLoginMutation } from "@/http/authApi";
import useLocalStore, { LOCAL_STORE_KEYS } from "@/hooks/useLocalStore";
import { updateUser } from "@/store/userSlice";
import { useAppDispatch } from "@/hooks/redux";

export default function SignIn() {
  const { colors } = useTheme<Theme>();
  const [loginDetails, setLoginDetails] = React.useState({
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();

  const { update: updateToken } = useLocalStore<string>(
    LOCAL_STORE_KEYS.JWT_TOKEN
  );

  const { update: updateUserId } = useLocalStore<string>(
    LOCAL_STORE_KEYS.USER_ID
  );

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const res = await login(loginDetails).unwrap();
      updateToken(res.data.token);
      updateUserId(res.data.user_id);
      dispatch(
        updateUser({
          email: res.data.email,
          name: res.data.name,
          token: res.data.token,
          userId: res.data.user_id,
          plan: res.data.plan,
        })
      );

      router.push("/home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ScreenContainer ScreenHeaderComponent={<AuthScreenHeader />}>
      <Box my="xl" px="s">
        <Text variant="h1">Sign In</Text>
        <Box gap="m" mt="default">
          <TextInput
            value={loginDetails.email}
            onChangeText={(email) =>
              setLoginDetails({ ...loginDetails, email })
            }
            showLabel
            label="Email Address"
            variant="outlined"
            PrefixElement={<LoginEnvelopeSVG />}
            style={{ lineHeight: 20 }}
            placeholder="johndoe@example.com"
          />
          <TextInput
            value={loginDetails.password}
            onChangeText={(p) =>
              setLoginDetails({ ...loginDetails, password: p })
            }
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
          variant="contained"
          onPress={handleLogin}
          buttonStyles={{ marginVertical: 10 }}
        >
          Sign In
        </Button>
        {isLoading && <ActivityIndicator />}
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
