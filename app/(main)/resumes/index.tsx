import Box from "@/components/ui/box";
import PageHeader from "@/components/ui/page-header";
import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
import { ScrollView } from "react-native";

export default function Resumes() {
  return (
    <ScreenContainer>
      <Box px="default">
        <PageHeader title="Resume templates" />

        <Box py= 'm'>
          <Text variant="h3" fontWeight={'500'}>Choose a template</Text>

          <ScrollView horizontal>

          </ScrollView>
        </Box>
      </Box>
    </ScreenContainer>
  );
}
