import { useState } from "react";
import Box from "@/components/ui/box";
import PageHeader from "@/components/ui/page-header";
import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
import { Alert, ScrollView, useWindowDimensions } from "react-native";
import ResumeTemplatePreview from "@/components/resume-template-preview";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import Button from "@/components/ui/button";

export default function Resumes() {
  const { width } = useWindowDimensions();
  const { spacing } = useTheme<Theme>();
  const templateWidth = (width - spacing.default * 2) * 0.9;
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const onSelectTemplate = () => {};

  return (
    <ScreenContainer>
      <Box px="default">
        <PageHeader title="Resume templates" />

        <Box py="s" height={"92%"} justifyContent="space-between">
          <Box>
            <Text variant="title" fontWeight={"bold"} mt="s">
              Choose a template
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 16, marginTop: 16 }}
              decelerationRate={"fast"}
              snapToAlignment="start"
              snapToInterval={templateWidth}
            >
              <ResumeTemplatePreview
                width={templateWidth - 16}
                image={require("@/assets/images/template-1.png")}
                name="Template One"
                selected={selectedTemplate === "Template One"}
                onSelect={setSelectedTemplate}
                description="Minimalist White and Grey Professional Resume"
              />
              <ResumeTemplatePreview
                width={templateWidth - 16}
                image={require("@/assets/images/template-2.png")}
                name="Template Two"
                selected={selectedTemplate === "Template Two"}
                onSelect={setSelectedTemplate}
                description="Gray and White Simple Clean Resume"
              />
              <ResumeTemplatePreview
                width={templateWidth - 16}
                image={require("@/assets/images/template-3.png")}
                name="Template Three"
                selected={selectedTemplate === "Template Three"}
                onSelect={setSelectedTemplate}
                description="Minimalist White and Grey Professional Resume"
              />
              <ResumeTemplatePreview
                width={templateWidth - 16}
                image={require("@/assets/images/template-4.png")}
                name="Template Four"
                selected={selectedTemplate === "Template Four"}
                onSelect={setSelectedTemplate}
                description="Minimalist White and Grey Professional Resume"
              />
              <ResumeTemplatePreview
                width={templateWidth - 16}
                image={require("@/assets/images/template-5.png")}
                name="Template Five"
                selected={selectedTemplate === "Template Five"}
                onSelect={setSelectedTemplate}
                description="Minimalist White and Grey Professional Resume"
              />
            </ScrollView>
          </Box>

          <Box px="default">
            <Button
              textColor="white"
              disabled={selectedTemplate === null}
              onPress={onSelectTemplate}
              buttonStyles={{ width: "100%" }}
            >
              Craft with this template
            </Button>
          </Box>
        </Box>
      </Box>
    </ScreenContainer>
  );
}
