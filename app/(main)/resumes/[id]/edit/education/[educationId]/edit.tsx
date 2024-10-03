import * as React from "react";
import Box from "@/components/ui/box";
import ScreenContainer from "@/components/ui/screen-container";
import TextInput from "@/components/ui/textinput";
import Button from "@/components/ui/button";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import { Resume } from "@/http/types";
import { router, useLocalSearchParams } from "expo-router";
import { useEditResumeMutation } from "@/http/resumeApi";
import DatePicker from "@/components/ui/date-picker";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";

export default function EditEducation() {
  const { educationId } = useLocalSearchParams();
  const { control, getValues, handleSubmit } = useFormContext<Resume>();
  const [editResume, { isLoading }] = useEditResumeMutation();
  const { colors } = useTheme<Theme>();

  const education = getValues("education") || [];
  const educationIndex = education.findIndex((e) => e.id === educationId);

  const onSubmit: SubmitHandler<Resume> = async (data) => {
    try {
      const res = await editResume(data).unwrap();
      console.log(res);
      router.canGoBack() && router.back();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScreenContainer
      showHeaderTitle
      headerTitle="Education"
      scrollable
      ScreenFooterComponent={
        <Button
          onPress={handleSubmit(onSubmit)}
          buttonStyles={{ marginVertical: 8 }}
          variant="contained"
          isLoading={isLoading}
        >
          Save
        </Button>
      }
    >
      <Box gap="m">
        <Controller
          control={control}
          name={`education.${educationIndex}.school`}
          render={({ field: { value, onChange, onBlur } }) => (
            <TextInput
              showLabel
              label="Name of Institution"
              placeholder="Princeton University"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />

        <Controller
          control={control}
          name={`education.${educationIndex}.degree`}
          render={({ field: { value, onChange, onBlur } }) => (
            <TextInput
              showLabel
              label="Degree"
              placeholder="Bachelor's"
              onChangeText={(text) => onChange(text)}
              onBlur={onBlur}
              value={value as string}
            />
          )}
        />

        <Controller
          control={control}
          name={`education.${educationIndex}.courseStudied`}
          render={({ field: { value, onChange, onBlur } }) => (
            <TextInput
              showLabel
              label="Major"
              placeholder="Computer Science"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />

        <Box gap="l" flexDirection="row">
          <Controller
            control={control}
            name={`education.${educationIndex}.startDate`}
            render={({ field: { value, onChange, onBlur } }) => (
              <DatePicker
                datePickerContainerProps={{ flex: 1 }}
                currentDate={value}
                onChange={onChange}
                onBlur={onBlur}
                showLabel
                label="Start Date"
                placeholder="Start Date"
                selectionColor={colors.primary}
                cursorColor={colors.primary}
              />
            )}
          />
          <Controller
            control={control}
            name={`education.${educationIndex}.endDate`}
            render={({ field: { value, onChange, onBlur } }) => (
              <DatePicker
                datePickerContainerProps={{ flex: 1 }}
                currentDate={value}
                onChange={onChange}
                onBlur={onBlur}
                showLabel
                label="End Date"
                placeholder="Start Date"
                selectionColor={colors.primary}
                cursorColor={colors.primary}
              />
            )}
          />
        </Box>

        <Controller
          control={control}
          name={`education.${educationIndex}.grade`}
          render={({ field: { value, onChange, onBlur } }) => (
            <TextInput
              showLabel
              label="GPA / Grade"
              placeholder="4.68"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </Box>
    </ScreenContainer>
  );
}
