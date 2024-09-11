import Box from "./ui/box";
import Text from "./ui/text";
import CheckboxSVG from "@/assets/icons/checkbox";

export default function PaymentPerk(props: { text: string; bottom?: boolean }) {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      gap="default"
      px="s"
      py="m"
      borderBottomWidth={props.bottom ? 0 : 1}
      borderBottomColor="border"
    >
      <CheckboxSVG />
      <Box pr="s" flex={1}>
        <Text variant="title" fontSize={17}>
          {props.text}
        </Text>
      </Box>
    </Box>
  );
}
