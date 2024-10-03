import { useTheme } from "@shopify/restyle";
import Box from "./box";
import { Pressable } from "react-native";
import { Theme } from "@/theme";

export default function RadioButton({
  checked,
  onPress,
  value,
  activeColor,
  inactiveColor,
}: {
  checked: boolean;
  onPress: (v: string) => void;
  value: string;
  inactiveColor?: string;
  activeColor?: string;
}) {
  const { colors } = useTheme<Theme>();

  return (
    <Pressable onPress={() => onPress(value)}>
      <Box
        height={20}
        width={20}
        borderRadius={12}
        justifyContent="center"
        alignItems="center"
        borderWidth={2}
        style={{
          borderColor: checked
            ? activeColor ?? colors.primary
            : inactiveColor ?? colors.primary,
        }}
      >
        {checked && (
          <Box
            height={11}
            width={11}
            borderRadius={100}
            style={{
              backgroundColor: activeColor ?? colors.primary,
            }}
          />
        )}
      </Box>
    </Pressable>
  );
}
