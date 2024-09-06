import * as React from "react";
import Box from "@/components/ui/box";
import ScreenContainer from "@/components/ui/screen-container";
import TextInput from "@/components/ui/textinput";
import Button from "@/components/ui/button";

export default function EditEducation() {
  const [educationDetails, setEducationDetails] = React.useState<{
    degree: string;
    institutionName: string;
    startDate: string;
    endDate: string;
    location: string;
    grade: string;
  }>({
    degree: "",
    institutionName: "",
    startDate: "",
    endDate: "",
    location: "",
    grade: "",
  });

  const onChangeText = (key: keyof typeof educationDetails, value: string) => {
    setEducationDetails((educationDetails) => ({
      ...educationDetails,
      [key]: value,
    }));
  };

  return (
    <ScreenContainer
      showHeaderTitle
      headerTitle="Education"
      scrollable
      ScreenFooterComponent={
        <Button
          disabled
          onPress={() => {}}
          textColor="white"
          buttonStyles={{ marginVertical: 8 }}
        >
          Save
        </Button>
      }
    >
      <Box gap="m">
        <TextInput
          showLabel
          label="Degree"
          placeholder="Bachelor's"
          onChangeText={(text) => onChangeText("degree", text)}
        />

        <TextInput
          showLabel
          label="Name of Institution"
          placeholder="Princeton University"
          onChangeText={(text) => onChangeText("institutionName", text)}
        />

        <Box gap="l" flexDirection="row">
          <TextInput
            showLabel
            label="Duration"
            placeholder="Start Date"
            containerProps={{ flex: 1 }}
          />
          <TextInput
            placeholder="End Date"
            containerProps={{ flex: 1 }}
            showLabel
            label=""
          />
        </Box>

        <TextInput showLabel label="Location" placeholder="United States" />
        <TextInput showLabel label="GPA / Grade" placeholder="4.68" />
      </Box>
    </ScreenContainer>
  );
}
