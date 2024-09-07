import Box from "./box";
import { Pressable } from "react-native";

export default function RadioButton({
  checked,
  onPress,
  value,
}: {
  checked: boolean;
  onPress: (v: string) => void;
  value: string;
}) {
  return (
    <Pressable onPress={() => onPress(value)}>
      <Box
        height={20}
        width={20}
        borderRadius={12}
        justifyContent="center"
        alignItems="center"
        borderWidth={2}
        borderColor={"primary"}
      >
        {checked && (
          <Box
            height={11}
            width={11}
            borderRadius={100}
            backgroundColor="primary"
          />
        )}
      </Box>
    </Pressable>
  );
}
