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
      tools: [],
      others: {},
    },
  });

  const { id } = useLocalSearchParams();
  const { isFetching, data } = useGetResumeByIDQuery(id as string);

  React.useEffect(() => {
    (async function () {
      if (data) {
        formMethods.reset(data.data);
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
