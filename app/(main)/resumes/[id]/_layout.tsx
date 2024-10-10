import RobotSVG from "@/assets/icons/robot";
import Box from "@/components/ui/box";
import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
import { useGetResumeByIDQuery } from "@/http/resumeApi";
import { Resume } from "@/http/types";
import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  ActivityIndicator,
  Pressable,
  useWindowDimensions,
} from "react-native";

export default function ResumeEditLayout() {
  const { spacing } = useTheme<Theme>();
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
      if (data) {
        console.log(JSON.stringify(data, null, 3));
        formMethods.reset({
          ...data.data,
          experiences: data.data.experiences?.map((exp) => ({
            ...exp,
            startDate:
              exp.startDate === "Present" ? "Present" : new Date(exp.startDate),
            endDate:
              exp.endDate === "Present" ? "Present" : new Date(exp.endDate),
          })),
          education: data.data.education?.map((edu) => ({
            ...edu,
            startDate: edu.startDate === "Present" ? "Present" : new Date(edu.startDate),
            endDate: edu.endDate === "Present" ? "Present" : new Date(edu.endDate),
          })),
        });
      }
    })();
  }, [data, formMethods]);

  const { height: DEVICE_HEIGHT } = useWindowDimensions();

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
      <Box
        width={60}
        height={60}
        borderRadius={10}
        position="absolute"
        zIndex={1000}
        backgroundColor="primary"
        bottom={0.1 * DEVICE_HEIGHT}
        right={spacing.l}
      >
        <Pressable
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RobotSVG />
        </Pressable>
      </Box>
    </FormProvider>
  );
}
