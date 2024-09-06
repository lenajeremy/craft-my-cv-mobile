import * as React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  View,
} from "react-native";
import Box from "@/components/ui/box";
import Button from "@/components/ui/button";
import PageHeader from "@/components/ui/page-header";
import ScreenContainer from "@/components/ui/screen-container";
import TextInput from "@/components/ui/textinput";
// import { useLocalSearchParams } from "expo-router";

export default function PersonalInformation() {
  // const { id } = useLocalSearchParams();
  const [formValues, setFormValues] = React.useState({
    fullName: "",
    jobTitle: "",
    phoneNumber: "",
    email: "",
    location: "",
  });

  const onChangeText = (key: keyof typeof formValues, value: string) => {
    setFormValues((formValues) => ({ ...formValues, [key]: value }));
  };

  return (
    <ScreenContainer
      scrollable
      showHeaderTitle
      headerTitle="Personal Information"
      ScreenFooterComponent={
        <Button
          disabled
          onPress={() => {}}
          textColor="white"
          buttonStyles={{ alignSelf: "center", marginVertical: 8 }}
        >
          Next
        </Button>
      }
    >
      <Box gap="m">
        <TextInput
          autoFocus
          showLabel
          label="Full name"
          placeholder="John Doe"
          onChangeText={(text) => onChangeText("fullName", text)}
        />

        <TextInput
          showLabel
          label="Desired Job Title"
          placeholder="What job title are you looking for?"
          onChangeText={(text) => onChangeText("fullName", text)}
        />

        <TextInput
          showLabel
          label="Phone Number"
          placeholder="+234 9066334521"
          onChangeText={(text) => onChangeText("phoneNumber", text)}
        />

        <TextInput
          showLabel
          label="Email"
          placeholder="johndoe@crafymycv.com"
          onChangeText={(text) => onChangeText("email", text)}
          keyboardType="email-address"
        />

        <TextInput
          showLabel
          label="Location"
          placeholder="Lagos, NG"
          onChangeText={(text) => onChangeText("location", text)}
          keyboardType="email-address"
        />
      </Box>
    </ScreenContainer>
  );
}
