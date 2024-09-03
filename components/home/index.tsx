import { useState } from "react";
import CirclePlusSVG from "@/assets/icons/circle-plus";
import Box from "@/components/ui/box";
import Text from "@/components/ui/text";
import { Pressable } from "react-native";
import DocumentSVG from "@/assets/icons/document";

export function ResumeCoverLetterTab() {
  const [selectedTab, setSelectedTab] = useState<"resume" | "cover-letter">(
    "resume"
  );
  const [resumes, setResumes] = useState<any[]>([]);
  const [coverLetters, setCoverLetters] = useState<any[]>([]);

  return (
    <Box>
      <Box py="s" flexDirection="row" justifyContent="space-between">
        <Box flexDirection="row" gap="m">
          <Pressable onPress={() => setSelectedTab("resume")}>
            <Box>
              <Text
                onLayout={(e) => console.log(e.nativeEvent.layout)}
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
                onLayout={(e) => console.log(e.nativeEvent.layout)}
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
        {selectedTab === "resume" ? (
          resumes.length > 0 ? (
            <Box>
              <Text>Resumes</Text>
            </Box>
          ) : (
            <Box alignItems="center" p="l" gap="m">
              <DocumentSVG />
              <Text variant="body" textAlign="center">
                No resumes created yet
              </Text>
            </Box>
          )
        ) : coverLetters.length > 0 ? (
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
        )}
      </Box>
    </Box>
  );
}
