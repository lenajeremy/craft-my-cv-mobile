import * as React from "react";
import Box from "@/components/ui/box";
import ScreenContainer from "@/components/ui/screen-container";
import TextInput from "@/components/ui/textinput";
import Button from "@/components/ui/button";

export default function EditWorkExperience() {
  const [workExperience, setWorkExperience] = React.useState<{
    company: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    location: string;
    responsibilities: string;
  }>({
    company: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    responsibilities: "",
  });

  const onChangeText = (key: keyof typeof workExperience, value: string) => {
    setWorkExperience((workExperience) => ({
      ...workExperience,
      [key]: value,
    }));
  };

  return (
    <ScreenContainer
      scrollable
      showHeaderTitle
      headerTitle="Work Experience"
      ScreenFooterComponent={
        <Button
          variant="contained"
          onPress={() => {}}
          buttonStyles={{ marginVertical: 8 }}
        >
          Save
        </Button>
      }
    >
      <Box gap="m">
        <TextInput
          showLabel
          autoFocus
          label="Company"
          placeholder="Company A"
          onChangeText={(text) => onChangeText("company", text)}
        />

        <TextInput
          showLabel
          label="Role or Job TItle"
          placeholder="Frontend Developer"
          onChangeText={(text) => onChangeText("jobTitle", text)}
        />

        <Box gap="m" flexDirection="row">
          <TextInput
            showLabel
            label="Time"
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

        <TextInput showLabel label="Location" placeholder="Lagos, NG" />
        <TextInput
          showLabel
          label="Responsibilites & Accomplishments"
          placeholder="Work Description"
          multiline
          numberOfLines={7}
          containerProps={{ height: 150 }}
        />
      </Box>
    </ScreenContainer>
  );
}
