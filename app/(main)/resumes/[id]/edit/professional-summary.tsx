import Box from "@/components/ui/box";
import PageHeader from "@/components/ui/page-header";
import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";

export default function ProfessionalSummary() {
  const { id } = useLocalSearchParams();

  return (
    <ScreenContainer>
      <Box px="default">
        <PageHeader title="Professional Summary" />
        <Box>
          <Text variant="h1">Professional Summary for {id}</Text>
        </Box>
      </Box>
    </ScreenContainer>
  );
}
