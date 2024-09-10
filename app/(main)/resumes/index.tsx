import { useState } from "react";
import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
import { ScrollView, useWindowDimensions } from "react-native";
import ResumeTemplatePreview from "@/components/resume-template-preview";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import Button from "@/components/ui/button";
import { useRouter } from "expo-router";
import { useListAllTemplatesQuery } from "@/http/templatesApi";
import { useCreateNewResumeMutation } from "@/http/resumeApi";
import { useAppSelector } from "@/hooks/redux";


export default function Resumes() {
  const { width } = useWindowDimensions();
  const { spacing } = useTheme<Theme>();
  const templateWidth = (width - spacing.default * 2) * 0.9;
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const router = useRouter();
  const { userId } = useAppSelector(state => state.user);
  const { data, isLoading, isError } = useListAllTemplatesQuery({
    page: 1,
    pageCount: 10,
  });

  const [createNewResume, { isLoading: isCreatingResume }] = useCreateNewResumeMutation()

  // const {} = useCreateResumeMutation()

  const onSelectTemplate = async () => {
    if (!selectedTemplate) {
      return;
    }
    
    try {
      const res = await createNewResume({
        template_id: selectedTemplate,
        owner_id: userId,
      }).unwrap()

      router.replace(`/resumes/${res.data.resume_id}/edit`);
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <ScreenContainer showHeaderTitle headerTitle="Resume Templates">
      <Text variant="title" fontWeight={"bold"}>
        Choose a template
      </Text>

      {
        isLoading && <Text>Loading...</Text>
      }

      {
        isError && <Text>Error loading templates</Text>
      }

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16, marginTop: 16 }}
        decelerationRate={"fast"}
        snapToAlignment="start"
        snapToInterval={templateWidth}
      >
        {data?.data.templates.map((template) => (
          <ResumeTemplatePreview
            key={template.id}
            id={template.id}
            width={templateWidth - 16}
            image={template.image_url}
            name={template.name}
            selected={selectedTemplate === template.id}
            onSelect={setSelectedTemplate}
            description={template.description}
          />
        ))}
      </ScrollView>

      <Button
        disabled={selectedTemplate === null}
        onPress={onSelectTemplate}
        buttonStyles={{ width: "100%" }}
        variant="contained"
      >
        {
          isCreatingResume ? "Crafting resume..." : "Craft with this template"
        }
      </Button>
    </ScreenContainer>
  );
}
