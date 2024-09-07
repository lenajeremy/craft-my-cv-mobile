import AISVG from "@/assets/icons/ai";
import Box from "@/components/ui/box";
import Button from "@/components/ui/button";
import ScreenContainer from "@/components/ui/screen-container";
import TextInput from "@/components/ui/textinput";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";

export default function ProfessionalSummary() {
  const [summary, setSummary] = React.useState("");
  const { id } = useLocalSearchParams();
  const aiSummary =
    "Creative and detail-oriented Front-End Developer with 3+ years of experience in building responsive and user-friendly websites and applications. Proficient in HTML, CSS, JavaScript, and modern frameworks like React and Vue.js. Adept at collaborating with cross-functional teams to deliver high-quality web solutions that enhance user engagement and performance. Passionate about optimizing user interfaces for maximum speed and scalability.";

  return (
    <ScreenContainer
      headerTitle="Professional Summary"
      showHeaderTitle
      ScreenFooterComponent={
        <Button
          variant="contained"
          onPress={() => router.push(`/resumes/${id}/edit`)}
          buttonStyles={{ marginVertical: 8 }}
        >
          Save
        </Button>
      }
    >
      <Box gap="l">
        <TextInput
          value={summary}
          onChangeText={setSummary}
          autoFocus
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
            variant="outlined"
          >
            Generate with AI
          </Button>
        </Box>
      </Box>
    </ScreenContainer>
  );
}
