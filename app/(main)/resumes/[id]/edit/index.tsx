import Box from "@/components/ui/box";
import ScreenContainer from "@/components/ui/screen-container";
import { useLocalSearchParams } from "expo-router";
import { unslugify, toTitleCase } from "@/utils/text";
import CardLink from "@/components/ui/card-link";

export default function ResumeEdit() {
  const { id } = useLocalSearchParams();
  const title = toTitleCase(unslugify(id as string));

  return (
    <ScreenContainer showHeaderTitle headerTitle={title}>
      <Box gap="m" mt="default">
        <CardLink href="./personal-information" title="Personal Information" />
        <CardLink title="Work Experience" href="./work-experience" />
        <CardLink title="Education" href="./education" />
        <CardLink title="Skills" href="./skills" />
        <CardLink title="Professional Summary" href="./professional-summary" />
      </Box>
    </ScreenContainer>
  );
}
