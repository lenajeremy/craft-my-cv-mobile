import { useState } from "react";
import CirclePlusSVG from "@/assets/icons/circle-plus";
import Box from "@/components/ui/box";
import Text from "@/components/ui/text";
import { ActivityIndicator, Pressable } from "react-native";
import DocumentSVG from "@/assets/icons/document";
import { useAppSelector } from "@/hooks/redux";
import {
  useDeleteResumeMutation,
  useListUserResumesQuery,
} from "@/http/resumeApi";
import TemplateSVG from "@/assets/icons/template";
import TrashSVG from "@/assets/icons/trash";
import { router } from "expo-router";

export function ResumeCoverLetterTab() {
  const [selectedTab, setSelectedTab] = useState<"resume" | "cover-letter">(
    "resume"
  );
  const [coverLetters] = useState<any[]>([]);

  const { userId } = useAppSelector((state) => state.user);

  const { data: userResumes, isLoading: isLoadingUserResumes } =
    useListUserResumesQuery({
      user_id: userId,
    });

  return (
    <Box>
      <Box py="s" flexDirection="row" justifyContent="space-between">
        <Box flexDirection="row" gap="m">
          <Pressable onPress={() => setSelectedTab("resume")}>
            <Box>
              <Text
                variant="h2"
                color={selectedTab === "resume" ? "headingText" : "mutedText"}
              >
                Resume
              </Text>
            </Box>
          </Pressable>

          <Pressable onPress={() => setSelectedTab("cover-letter")}>
            <Box>
              <Text
                variant="h2"
                color={
                  selectedTab === "cover-letter" ? "headingText" : "mutedText"
                }
              >
                Cover Letter
              </Text>
            </Box>
          </Pressable>
        </Box>
        <CirclePlusSVG width={28} height={28} />
      </Box>

      <Box mt="m">
        {isLoadingUserResumes && <ActivityIndicator />}

        {!isLoadingUserResumes &&
          selectedTab === "resume" &&
          (userResumes?.data && userResumes.data.length > 0 ? (
            <Box>
              {userResumes.data.map((resume, index) => (
                <Resume key={resume.id} {...resume} index={index} />
              ))}
            </Box>
          ) : (
            <Box alignItems="center" p="l" gap="m">
              <DocumentSVG />
              <Text variant="body" textAlign="center">
                No resumes created yet
              </Text>
            </Box>
          ))}

        {!isLoadingUserResumes &&
          selectedTab === "cover-letter" &&
          (coverLetters.length > 0 ? (
            <Box>
              <Text>Cover Letters</Text>
            </Box>
          ) : (
            <Box alignItems="center" p="l" gap="m">
              <DocumentSVG />
              <Text textAlign="center" variant="body">
                No cover letters created yet
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  );
}

function Resume(props: {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  index?: number;
}) {
  const [deleteResume, { isLoading: isDeletingResume }] =
    useDeleteResumeMutation();

  const handleResumeDelete = async () => {
    try {
      const res = await deleteResume({ resumeId: props.id });
      if (res.error) {
        // @ts-ignore
        throw new Error(res.error.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      style={{ paddingBottom: 14, paddingTop: props.index === 0 ? 0 : 14 }}
      borderBottomWidth={1}
      borderColor="border"
      gap="xs"
      pr="s"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Pressable
        style={{ flex: 1 }}
        onPress={() => router.push(`/resumes/${props.id}/edit`)}
      >
        <Box flexDirection="row" gap="s" alignItems="center">
          <TemplateSVG />
          <Box>
            <Text variant="title" font="Manrope-SemiBold">
              {props.name}
            </Text>
            <Text variant="small" color="mutedText">
              {Intl.DateTimeFormat("en-GB", {
                month: "short",
                day: "2-digit",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              }).format(new Date(props.updatedAt))}
            </Text>
          </Box>
        </Box>
      </Pressable>

      <Pressable
        onPress={handleResumeDelete}
        style={{ backgroundColor: "#FCECEC", padding: 10, borderRadius: 100 }}
      >
        {isDeletingResume ? <ActivityIndicator /> : <TrashSVG />}
      </Pressable>
    </Box>
  );
}
