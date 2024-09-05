import * as React from "react";
import Box from "@/components/ui/box";
import PageHeader from "@/components/ui/page-header";
import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
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
    <ScreenContainer>
      <Box px="default">
        <PageHeader title="Work Experience" />
        <Box height={"90%"} justifyContent="space-between">
          <Box gap="m">
            <TextInput
              showLabel
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

            <Box gap="l" flexDirection="row">
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

          <Box alignItems="center">
            <Button disabled onPress={() => {}} textColor="white">
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </ScreenContainer>
  );
}
