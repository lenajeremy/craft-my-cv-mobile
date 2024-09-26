import Box from "@/components/ui/box";
import ScreenContainer from "@/components/ui/screen-container";
import CardLink from "@/components/ui/card-link";
import { Resume } from "@/http/types";
import { useFormContext } from "react-hook-form";
import Button from "@/components/ui/button";
import { useResumeFormCompletion } from "@/hooks/useResumeFormCompletion";
import { router } from "expo-router";

export default function ResumeEdit() {
  const { getValues } = useFormContext<Resume>();
  const name = getValues("resumeName");
  const id = getValues("id");

  const isResumeCompleted = useResumeFormCompletion()

  return (
    <ScreenContainer showHeaderTitle headerTitle={name} ScreenFooterComponent = {<Box>
      <Button onPress={() => router.push('./preview-and-download')} disabled = {!isResumeCompleted} variant="contained">Preview & Export</Button>
  </Box>}>
      <Box gap="m" mt="default">
        <CardLink
          href={{
            pathname: "/resumes/[id]/edit/personal-information",
            params: { id },
          }}
          title="Personal Information"
        />
        <CardLink
          href={{
            pathname: "/resumes/[id]/edit/work-experience",
            params: { id },
          }}
          title="Work Experience"
        />
        <CardLink
          href={{ pathname: "/resumes/[id]/edit/education", params: { id } }}
          title="Education"
        />
        <CardLink
          href={{ pathname: "/resumes/[id]/edit/skills", params: { id } }}
          title="Skills"
        />
        <CardLink
          href={{
            pathname: "/resumes/[id]/edit/professional-summary",
            params: { id },
          }}
          title="Professional Summary"
        />
      </Box>
    </ScreenContainer>
  );
}
