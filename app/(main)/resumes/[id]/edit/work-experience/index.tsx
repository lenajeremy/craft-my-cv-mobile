import PlusSVG from "@/assets/icons/plus-icon";
import Box from "@/components/ui/box";
import Button from "@/components/ui/button";
import CardLink from "@/components/ui/card-link";
import ScreenContainer from "@/components/ui/screen-container";
import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import { useRouter } from "expo-router";

export default function WorkExperience() {
  const companies = ["Microsoft", "Goldman Sachs", "Black Rock"];

  const { colors } = useTheme<Theme>();
  const router = useRouter();

  return (
    <ScreenContainer showHeaderTitle headerTitle="Work Experience">
      <Box gap="m" mt="default">
        {companies.map((company, i) => (
          <CardLink href={`./edit`} title={company} key={company} />
        ))}

        <Box alignItems="center" mt="l">
          <Button
            color="white"
            textColor={colors.primary}
            onPress={() => router.push("./edit")}
            icon={<PlusSVG />}
            buttonStyles={{
              width: "100%",
            }}
          >
            Add Another
          </Button>
        </Box>
      </Box>
    </ScreenContainer>
  );
}
