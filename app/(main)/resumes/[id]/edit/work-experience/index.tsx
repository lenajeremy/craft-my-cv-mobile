import Text from "@/components/ui/text";
import PlusSVG from "@/assets/icons/plus-icon";
import Box from "@/components/ui/box";
import Button from "@/components/ui/button";
import CardLink from "@/components/ui/card-link";
import ScreenContainer from "@/components/ui/screen-container";
import { Resume } from "@/http/types";
import { useRouter } from "expo-router";
import { useFormContext } from "react-hook-form";
import uuid from "react-native-uuid";
import { Pressable } from "react-native";
import TrashSVG from "@/assets/icons/trash";

export default function WorkExperience() {
  const router = useRouter();
  const { watch, setValue } = useFormContext<Resume>();

  const workExperience = watch("experiences");

  const onAddExperience = () => {
    const newExperience = {
      company: "",
      location: "",
      responsibilities: "",
      role: "",
      startDate: new Date(),
      endDate: new Date(),
      id: uuid.v4().toString(),
    };

    if (workExperience) {
      setValue("experiences", [...workExperience, newExperience]);
    } else {
      setValue("experiences", [newExperience]);
    }

    router.push(`./${newExperience.id}/edit`);
  };

  const onDeleteExperience = (id: string) => {
    setValue('experiences', workExperience?.filter(exp => exp.id !== id) || [])
  }

  return (
    <ScreenContainer showHeaderTitle headerTitle="Work Experience">
      <Box gap="m" mt="default">
        {workExperience && workExperience.length > 0 ? (
          workExperience.map((experience) => (
            <CardLink
              href={`./${experience.id}/edit`}
              title={experience.company || "Untitled Company"}
              key={experience.id}
              containerProps={{
                py: "m",
              }}
              SuffixElement={
                <Pressable
                  onPress={(e) => {
                    e.stopPropagation();
                    onDeleteExperience(experience.id)
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
        ) : (
          <Box alignItems="center" my="l">
            <Text textAlign="center">No work experience found</Text>
          </Box>
        )}

        <Box alignItems="center" mt="l">
          <Button
            variant="outlined"
            onPress={onAddExperience}
            icon={<PlusSVG />}
          >
            Add Another
          </Button>
        </Box>
      </Box>
    </ScreenContainer>
  );
}
