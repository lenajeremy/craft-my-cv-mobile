import Box from "@/components/ui/box";
import ScreenContainer from "@/components/ui/screen-container";
import CardLink from "@/components/ui/card-link";
import { Resume } from "@/http/types";
import { useFormContext } from "react-hook-form";


export default function ResumeEdit() {
  const { getValues } = useFormContext<Resume>();
  const name = getValues("resumeName");

  return (
    <ScreenContainer showHeaderTitle headerTitle={name}>
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
