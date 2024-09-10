import Box from "@/components/ui/box";
import ScreenContainer from "@/components/ui/screen-container";
import { useLocalSearchParams } from "expo-router";
import CardLink from "@/components/ui/card-link";


export default function ResumeEdit() {
  const { name } = useLocalSearchParams();
  return (
    <ScreenContainer showHeaderTitle headerTitle={name as string}>
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
