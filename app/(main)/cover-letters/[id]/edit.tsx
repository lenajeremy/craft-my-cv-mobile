import Box from "@/components/ui/box";
import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";

export default function CoverLetterEdit() {
  const { id } = useLocalSearchParams();

  return (
    <ScreenContainer>
      <Box px="default">
        <Text variant="h1">Editing Cover Letter with ID: {id}</Text>
      </Box>
    </ScreenContainer>
  );
}
