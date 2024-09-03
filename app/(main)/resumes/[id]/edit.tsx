import Box from "@/components/ui/box";
import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";

export default function ResumeEdit() {
  const { id } = useLocalSearchParams();

  return (
    <ScreenContainer>
      <Box px="default">
        <Text variant="h1">Editing Resume with ID: {id}</Text>
      </Box>
    </ScreenContainer>
  );
}
