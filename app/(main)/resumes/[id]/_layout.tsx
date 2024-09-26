import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
import { useGetResumeByIDQuery } from "@/http/resumeApi";
import { Resume } from "@/http/types";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { ActivityIndicator } from "react-native";

export default function ResumeEditLayout() {
  const formMethods = useForm<Resume>({
    defaultValues: {
      id: "",
      resumeName: "",
      resumeDescription: "",
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      phoneNumber: "",
      role: "",
      description: "",
      education: [],
      experiences: [],
      skills: [],
      others: {},
    },
  });

  const { id } = useLocalSearchParams();
  const { isFetching, data } = useGetResumeByIDQuery(id as string);

  React.useEffect(() => {
    (async function () {
      console.log(JSON.stringify(data, null, 3));
      if (data) {
        formMethods.reset({
          ...data.data,
          experiences: data.data.experiences?.map((exp) => ({
            ...exp,
            startDate: new Date(exp.startDate),
            endDate: new Date(exp.endDate),
          })),
          education: data.data.education?.map((edu) => ({
            ...edu,
            startDate: new Date(edu.startDate),
            endDate: new Date(edu.endDate),
          })),
        });
      }
    })();
  }, [data, formMethods]);

  if (isFetching) {
    return (
      <ScreenContainer
        contentContainerProps={{
          justifyContent: "center",
          alignItems: "center",
          gap: "xs",
        }}
      >
        <ActivityIndicator />
        <Text>Fetching Resume Details...</Text>
      </ScreenContainer>
    );
  }

  return (
    <FormProvider {...formMethods}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="edit/index" />
      </Stack>
    </FormProvider>
  );
}
