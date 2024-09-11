import Box from "@/components/ui/box";
import Text from "@/components/ui/text";
import ScreenContainer from "@/components/ui/screen-container";
import { Link } from "expo-router";

export default function PaymentOptions() {
  return (
    <ScreenContainer>
      <Box>
        <Link href="/paywall">
          <Text>Modal</Text>
        </Link>
      </Box>
    </ScreenContainer>
  );
}
