import AISVG from "@/assets/icons/ai";
import Box from "@/components/ui/box";
import Button from "@/components/ui/button";
import PageHeader from "@/components/ui/page-header";
import ScreenContainer from "@/components/ui/screen-container";
import TextInput from "@/components/ui/textinput";
import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";

export default function ProfessionalSummary() {
  const { colors } = useTheme<Theme>();
  const [summary, setSummary] = React.useState("");
  const { id } = useLocalSearchParams();
  const aiSummary =
    "Creative and detail-oriented Front-End Developer with 3+ years of experience in building responsive and user-friendly websites and applications. Proficient in HTML, CSS, JavaScript, and modern frameworks like React and Vue.js. Adept at collaborating with cross-functional teams to deliver high-quality web solutions that enhance user engagement and performance. Passionate about optimizing user interfaces for maximum speed and scalability.";

  return (
    <ScreenContainer>
      <Box px="default" height={"100%"}>
        <PageHeader title="Professional Summary" />
        <Box flex={1} mt="s" justifyContent="space-between">
          <Box gap="l">
            <TextInput
              value={summary}
              onChangeText={setSummary}
              showLabel
              multiline
              label="Your Summary"
              placeholder="Write or generate summary with AI"
              numberOfLines={5}
              containerProps={{ height: 200 }}
            />
            <Box alignItems="center">
            <Button
              onPress={() => setSummary(aiSummary)}
              icon={<AISVG />}
              textColor={colors.primary}
              color="white"
            >
              Generate with AI
            </Button>
            </Box>
          </Box>

          <Box alignItems="center">
            <Button onPress={() => router.push(`/resumes/${id}/edit`)} textColor="white">
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </ScreenContainer>
  );
}
