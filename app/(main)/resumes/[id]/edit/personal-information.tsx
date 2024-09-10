import * as React from "react";
import Box from "@/components/ui/box";
import Button from "@/components/ui/button";
import ScreenContainer from "@/components/ui/screen-container";
import TextInput from "@/components/ui/textinput";
import { Resume } from "@/http/types";
import { useFormContext, Controller } from "react-hook-form";
import { useEditResumeMutation } from "@/http/resumeApi";
import { router } from "expo-router";

export default function PersonalInformation() {
  const { control, handleSubmit } = useFormContext<Resume>();
  const [editResume, { isLoading }] = useEditResumeMutation()

  const onSubmit = async (value: Resume) => {
    const res = await editResume({
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      phoneNumber: value.phoneNumber,
      address: value.address,
      role: value.role,
      id: value.id
    }).unwrap()

    if(res.success) {
      router.push({
        pathname: "/resumes/[id]/edit/work-experience",
        params: {
          id: value.id
        }
      })
    } else {
      console.error(res)
    }
  }

  return (
    <ScreenContainer
      scrollable
      showHeaderTitle
      headerTitle="Personal Information"
      ScreenFooterComponent={
        <Button
        isLoading = {isLoading}
          variant="contained"
          onPress={handleSubmit(onSubmit)}
          buttonStyles={{ alignSelf: "center", marginVertical: 8 }}
        >
          Next
        </Button>
      }
    >
      <Box gap="m">
        <Box gap="m" flexDirection="row">
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <TextInput
              containerProps={{flex: 1}}
                autoFocus
                showLabel
                label="First name"
                placeholder="John"
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />

          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <TextInput
                containerProps={{flex: 1}}
                autoFocus
                showLabel
                label="Last name"
                placeholder="Doe"
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />
        </Box>

        <Controller
          control={control}
          name="role"
          render={({ field }) => (
            <TextInput
              showLabel
              label="Desired Job Title"
              placeholder="What job title are you looking for?"
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
        />

        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <TextInput
              showLabel
              label="Phone Number"
              placeholder="+234 9066334521"
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextInput
              showLabel
              label="Email"
              placeholder="johndoe@crafymycv.com"
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
              keyboardType="email-address"
            />
          )}
        />

        <Controller
          control={control}
          name="address"
          render={({ field }) => (
            <TextInput
              showLabel
              label="Location"
              placeholder="Lagos, NG"
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
              keyboardType="email-address"
            />
          )}
        />
      </Box>
    </ScreenContainer>
  );
}
