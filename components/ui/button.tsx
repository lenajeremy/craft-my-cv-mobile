import {
  DimensionValue,
  Pressable,
  PressableProps,
  StyleSheet,
} from "react-native";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import Text from "./text";
import { useMemo } from "react";
import Box from "./box";

export type ButtonProps = {
  disabled?: boolean;
  buttonStyles?: PressableProps["style"];
  color?: string;
  marginBottom?: DimensionValue;
  onPress: () => void;
  children?: React.ReactNode;
  accessibilityLabel?: string;
  textColor: string;
  icon?: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  const { colors } = useTheme<Theme>();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: 8,
          alignItems: "center",
          borderRadius: 32,
          width: "100%",
          height: 60,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          borderColor: colors.primary,
          borderWidth: 1,
        },
        disabled: {
          backgroundColor: colors.primaryFaded,
          borderColor: colors.primaryFaded,
          // opacity: 0.8,
        },
        text: { fontSize: 18 },
      }),
    [colors]
  );

  return (
    <Pressable
      // @ts-ignore
      style={({ pressed }) => [
        styles.container,
        props.buttonStyles,
        {
          backgroundColor: pressed
            ? colors.primary + "10"
            : props.color || colors.primary,
        },
        props.disabled && styles.disabled,
      ]}
      disabled={props.disabled}
      onPress={props.onPress}
      accessible
      accessibilityLabel={props.accessibilityLabel || "A Button"}
    >
      <Box flexDirection="row" alignItems="center" gap="s">
        {props.icon && props.icon}
        <Text
          fontWeight="700"
          style={[styles.text, { color: props.textColor || "white" }]}
        >
          {props.children || "Press Me"}
        </Text>
      </Box>
    </Pressable>
  );
};

export default Button;
