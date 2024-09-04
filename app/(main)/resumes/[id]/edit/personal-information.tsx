import Box from "@/components/ui/box";
import Button from "@/components/ui/button";
import PageHeader from "@/components/ui/page-header";
import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";

export default function PersonalInformation() {
  const { id } = useLocalSearchParams();

  return (
    <ScreenContainer>
      <Box px="default">
        <PageHeader title="Personal Information" />
        <Box height={"91%"} justifyContent="space-between">
          <Box gap="m">
            <Text variant="h1">Personal Information for {id}</Text>
          </Box>
          <Box alignItems="center">
            <Button disabled onPress={() => {}} textColor="white">
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </ScreenContainer>
  );
}
