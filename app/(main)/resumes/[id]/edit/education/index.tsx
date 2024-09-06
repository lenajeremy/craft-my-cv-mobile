import PlusSVG from "@/assets/icons/plus-icon";
import Box from "@/components/ui/box";
import Button from "@/components/ui/button";
import CardLink from "@/components/ui/card-link";
import ScreenContainer from "@/components/ui/screen-container";
import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import { useRouter } from "expo-router";

export default function Education() {
  const schools = ["Princeton University", "University of Lagos"];

  const { colors } = useTheme<Theme>();
  const router = useRouter();

  return (
    <ScreenContainer showHeaderTitle headerTitle="Education">
      <Box gap="m" mt="default">
        {schools.map((school, i) => (
          <CardLink href={`./edit`} title={school} key={school} />
        ))}

        <Box alignItems="center" mt="l">
          <Button
            color="white"
            textColor={colors.primary}
            onPress={() => router.push("./edit")}
            icon={<PlusSVG />}
          >
            Add Another
          </Button>
        </Box>
      </Box>
    </ScreenContainer>
  );
}
