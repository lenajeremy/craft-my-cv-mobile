import Box from "@/components/ui/box";
import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
import { Link, useLocalSearchParams } from "expo-router";
import { unslugify, toTitleCase } from "@/utils/text";
import PageHeader from "@/components/ui/page-header";
import { Pressable } from "react-native";
import ArrowRightSVG from "@/assets/icons/arrow-right";

export default function ResumeEdit() {
  const { id } = useLocalSearchParams();
  const title = toTitleCase(unslugify(id as string));

  return (
    <ScreenContainer>
      <Box px="default">
        <PageHeader title={title} />

        <Box gap="m" mt="default">
          <Link href="./personal-information" asChild>
            <Pressable>
              <Box
                borderWidth={1}
                borderColor="border"
                borderRadius={16}
                width="100%"
                py="default"
                px="m"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text variant="h3" fontWeight="300">
                  Personal Information
                </Text>
                <ArrowRightSVG />
              </Box>
            </Pressable>
          </Link>

          <Link href="./work-experience" asChild>
            <Pressable>
              <Box
                borderWidth={1}
                borderColor="border"
                borderRadius={16}
                width="100%"
                py="default"
                px="m"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text variant="h3" fontWeight="300">
                  Work Experience
                </Text>
                <ArrowRightSVG />
              </Box>
            </Pressable>
          </Link>

          <Link href="./education" asChild>
            <Pressable>
              <Box
                borderWidth={1}
                borderColor="border"
                borderRadius={16}
                width="100%"
                py="default"
                px="m"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text variant="h3" fontWeight="300">
                  Education
                </Text>
                <ArrowRightSVG />
              </Box>
            </Pressable>
          </Link>

          <Link href="./skills" asChild>
            <Pressable>
              <Box
                borderWidth={1}
                borderColor="border"
                borderRadius={16}
                width="100%"
                py="default"
                px="m"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text variant="h3" fontWeight="300">
                  Skills
                </Text>
                <ArrowRightSVG />
              </Box>
            </Pressable>
          </Link>

          <Link href="./professional-summary" asChild>
            <Pressable>
              <Box
                borderWidth={1}
                borderColor="border"
                borderRadius={16}
                width="100%"
                py="default"
                px="m"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text variant="h3" fontWeight="300">
                  Professional Summary
                </Text>
                <ArrowRightSVG />
              </Box>
            </Pressable>
          </Link>
        </Box>
      </Box>
    </ScreenContainer>
  );
}
