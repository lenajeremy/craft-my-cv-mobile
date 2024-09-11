import AISVG from "@/assets/icons/ai";
import Box from "@/components/ui/box";
import Button from "@/components/ui/button";
import ScreenContainer from "@/components/ui/screen-container";
import TextInput from "@/components/ui/textinput";
import { useEditResumeMutation } from "@/http/resumeApi";
import { Resume } from "@/http/types";
import { router } from "expo-router";
import React from "react";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";

export default function ProfessionalSummary() {
  
  const aiSummary =
    "Creative and detail-oriented Front-End Developer with 3+ years of experience in building responsive and user-friendly websites and applications. Proficient in HTML, CSS, JavaScript, and modern frameworks like React and Vue.js. Adept at collaborating with cross-functional teams to deliver high-quality web solutions that enhance user engagement and performance. Passionate about optimizing user interfaces for maximum speed and scalability.";
  const { control, handleSubmit, setValue } = useFormContext<Resume>();

  const [editResume, { isLoading }] = useEditResumeMutation();

  const onSubmit: SubmitHandler<Resume> = async (data) => {
    try {
      await editResume(data).unwrap();
      router.canGoBack() && router.back();
    } catch (error) {
      console.error(JSON.stringify(error, null, 3));
    }
  };

  return (
    <ScreenContainer
      headerTitle="Professional Summary"
      showHeaderTitle
      ScreenFooterComponent={
        <Button
          variant="contained"
          isLoading={isLoading}
          onPress={handleSubmit(onSubmit)}
          buttonStyles={{ marginVertical: 8 }}
        >
          Save
        </Button>
      }
    >
      <Box gap="l">
        <Controller
          control={control}
          name="professionalSummary"
          render={({ field: { value, onChange, onBlur } }) => (
            <TextInput
              value={value || ""}
              onChangeText={onChange}
              autoFocus
              showLabel
              multiline
              label="Your Summary"
              placeholder="Write or generate summary with AI"
              numberOfLines={5}
              containerProps={{ height: 200 }}
              onBlur={onBlur}
            />
          )}
        />
        <Box alignItems="center">
          <Button
            onPress={() => setValue("professionalSummary", aiSummary)}
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
