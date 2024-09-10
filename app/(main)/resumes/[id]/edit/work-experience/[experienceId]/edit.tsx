import * as React from "react";
import Box from "@/components/ui/box";
import ScreenContainer from "@/components/ui/screen-container";
import TextInput from "@/components/ui/textinput";
import Button from "@/components/ui/button";
import { router, useLocalSearchParams } from "expo-router";
import { Controller, SubmitHandler,  useFormContext } from "react-hook-form";
import { Resume } from "@/http/types";
import { useEditResumeMutation } from "@/http/resumeApi";


export default function EditWorkExperience() {
  const { experienceId } = useLocalSearchParams();
  const { control, handleSubmit, getValues } = useFormContext<Resume>();
  const [editResume, { isLoading }] = useEditResumeMutation();
  const experiences = getValues("experiences");
  const experienceIndex =
    experiences?.findIndex((experience) => experience.id === experienceId) || 0;


  const onSubmit: SubmitHandler<Resume> = async (data) => {
    console.log(data);
    console.log(getValues());
    try {
      await editResume(data).unwrap();
      router.canGoBack() && router.back();
    } catch (error) {
      console.error(JSON.stringify(error, null, 3));
    }
  };

  return (
    <ScreenContainer
      scrollable
      showHeaderTitle
      headerTitle="Work Experience"
      ScreenFooterComponent={
        <Button
          isLoading={isLoading}
          variant="contained"
          onPress={handleSubmit(onSubmit)}
          buttonStyles={{ marginVertical: 8 }}
        >
          Save
        </Button>
      }
    >
      <Box gap="m">
        {/* <Text>{JSON.stringify(getValues(), null, 3)}</Text> */}
        <Controller
          control={control}
          name={`experiences.${experienceIndex}.company`}
          render={({ field }) => (
            <TextInput
              showLabel
              autoFocus
              label="Company"
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
              placeholder="Company A"
            />
          )}
        />

        <Controller
          control={control}
          name={`experiences.${experienceIndex}.role`}
          render={({ field }) => (
            <TextInput
              showLabel
              label="Role or Job TItle"
              placeholder="Frontend Developer"
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
        />

        <Box gap="m" flexDirection="row">
          <Controller
            control={control}
            name={`experiences.${experienceIndex}.startDate`}
            render={({ field }) => (
              <TextInput
                showLabel
                label="Time"
                placeholder="Start Date"
                onBlur={field.onBlur}
                onChangeText={(text) => {
                  if (Number.isNaN(new Date(text).getTime())) {
                    field.onChange(new Date(text));
                  } else {
                    field.onChange(new Date());
                  }
                }}
                value={field.value?.toDateString()}
                containerProps={{ flex: 1 }}
              />
            )}
          />

          <Controller
            control={control}
            name={`experiences.${experienceIndex}.endDate`}
            render={({ field }) => (
              <TextInput
                placeholder="End Date"
                containerProps={{ flex: 1 }}
                showLabel
                label=""
                onBlur={field.onBlur}
                onChangeText={(text) => {
                  if (Number.isNaN(new Date(text).getTime())) {
                    field.onChange(new Date(text));
                  } else {
                    field.onChange(new Date());
                  }
                }}
                value={field.value?.toDateString()}
              />
            )}
          />
        </Box>

        <Controller
          control={control}
          name={`experiences.${experienceIndex}.location`}
          render={({ field }) => (
            <TextInput
              showLabel
              label="Location"
              placeholder="Lagos, NG"
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
        />

        <Controller
          control={control}
          name={`experiences.${experienceIndex}.responsibilities`}
          render={({ field }) => (
            <TextInput
              showLabel
              label="Responsibilites & Accomplishments"
              placeholder="Work Description"
              multiline
              numberOfLines={7}
              containerProps={{ height: 150 }}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
        />
      </Box>
    </ScreenContainer>
  );
}
