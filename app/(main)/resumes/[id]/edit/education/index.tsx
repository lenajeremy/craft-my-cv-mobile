import PlusSVG from "@/assets/icons/plus-icon";
import Box from "@/components/ui/box";
import Text from "@/components/ui/text";
import Button from "@/components/ui/button";
import CardLink from "@/components/ui/card-link";
import ScreenContainer from "@/components/ui/screen-container";
import { Resume } from "@/http/types";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useFormContext } from "react-hook-form";
import uuid from "react-native-uuid";
import { Pressable } from "react-native";
import TrashSVG from "@/assets/icons/trash";

export default function Education() {
  const router = useRouter();
  const { watch, setValue } = useFormContext<Resume>();
  const education = watch("education") || [];
  const { id } = useLocalSearchParams<{ id: string }>();

  const handleAddEducation = () => {
    const newEducation = {
      id: uuid.v4() as string,
      school: "",
      degree: "",
      startDate: new Date(),
      endDate: new Date(),
      grade: "",
      courseStudied: "",
    };

    setValue("education", [...education, newEducation]);

    router.push(`./${newEducation.id}/edit`);
  };

  const onDeleteEducation = (id: string) => {
    setValue(
      "education",
      education.filter((edu) => edu.id !== id)
    );
  };

  return (
    <ScreenContainer
      showHeaderTitle
      headerTitle="Education"
      ScreenFooterComponent={
        <Button
          variant="contained"
          onPress={() =>
            router.replace({
              pathname: "/resumes/[id]/edit/skills",
              params: { id },
            })
          }
          buttonStyles={{ alignSelf: "center", marginVertical: 8 }}
        >
          Next
        </Button>
      }
    >
      <Box gap="m" mt="default">
        {education.length === 0 ? (
          <Box alignItems="center" my="l">
            <Text textAlign="center">No education added</Text>
          </Box>
        ) : (
          education.map((education) => (
            <CardLink
              href={`./${education.id}/edit`}
              title={education.school}
              key={education.id}
              containerProps={{
                py: "m",
              }}
              SuffixElement={
                <Pressable
                  onPress={(e) => {
                    e.stopPropagation();
                    onDeleteEducation(education.id);
                  }}
                  style={{
                    backgroundColor: "#FCECEC",
                    padding: 8,
                    borderRadius: 100,
                  }}
                >
                  <TrashSVG />
                </Pressable>
              }
            />
          ))
        )}

        <Box alignItems="center" mt="l">
          <Button
            variant="outlined"
            onPress={handleAddEducation}
            icon={<PlusSVG />}
          >
            Add Another
          </Button>
        </Box>
      </Box>
    </ScreenContainer>
  );
}
