import { useNavigation } from "expo-router";
import { useEffect } from "react";
import Text from "@/components/ui/text";
import ScreenContainer from "@/components/ui/screen-container";
import AuthScreenHeader from "@/components/auth/screen-header";
import Box from "@/components/ui/box";
import TextInput from "@/components/ui/textinput";

export default function Signup() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <ScreenContainer ScreenHeaderComponent={<AuthScreenHeader />}>
      <Box my="m">
        <Text variant="h1">SIgn In</Text>
        <TextInput showLabel label="Email Address" variant="outlined"  />
      </Box>
    </ScreenContainer>
  );
}
