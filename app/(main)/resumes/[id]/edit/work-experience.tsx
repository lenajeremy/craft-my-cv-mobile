import PlusSVG from "@/assets/icons/plus-icon";
import Box from "@/components/ui/box";
import Button from "@/components/ui/button";
import CardLink from "@/components/ui/card-link";
import PageHeader from "@/components/ui/page-header";
import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
import { Theme } from "@/theme";
import { slugify } from "@/utils/text";
import { useTheme } from "@shopify/restyle";
import { useLocalSearchParams } from "expo-router";
import { Alert } from "react-native";

export default function WorkExperience() {
  const { id } = useLocalSearchParams();
  const companies = ["Microsoft", "Goldman Sachs", "Black Rock"];
  const companiesSlug = companies.map((c) => slugify(c).toLowerCase());

  const { colors } = useTheme<Theme>();

  return (
    <ScreenContainer>
      <Box px="default">
        <PageHeader title="Work Experience" />
        <Box gap="m" mt="default">
          {companies.map((company, i) => (
            <CardLink
              href={`./${companiesSlug[i]}/edit`}
              title={company}
              key={company}
            />
          ))}

          <Button
            color="white"
            textColor={colors.primary}
            onPress={() => Alert.alert("Pressed")}
            icon={<PlusSVG />}
  
          >
            Add Another
          </Button>
        </Box>
      </Box>
    </ScreenContainer>
  );
}
