import {
  ActivityIndicator,
  DimensionValue,
  Pressable,
  PressableProps,
  StyleSheet,
  TextStyle,
  useColorScheme,
} from "react-native";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import Text from "./text";
import { useMemo } from "react";
import Box from "./box";

export type ButtonProps = {
  disabled?: boolean;
  buttonStyles?: PressableProps["style"];
  marginBottom?: DimensionValue;
  onPress: () => void;
  children?: React.ReactNode;
  accessibilityLabel?: string;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
  variant: "outlined" | "contained";
  isLoading?: boolean;
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
          opacity: 0.3,
        },
        text: { fontSize: 16, fontWeight: '700' },
      }),
    [colors]
  );

  return (
    <Pressable
      // @ts-ignore
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor:
            props.variant === "contained"
              ? colors.primary
              : colors.mainBackground,
          opacity: pressed ? 0.5 : 1,
        },
        (props.disabled || props.isLoading) && styles.disabled,
        props.buttonStyles,
      ]}
      disabled={props.disabled || props.isLoading}
      onPress={props.onPress}
      accessible
      accessibilityLabel={props.accessibilityLabel || "A Button"}
    >
      <Box flexDirection="row" alignItems="center" gap="s">
        {props.icon && props.icon}
        {props.isLoading && <ActivityIndicator size="small" color={colors.white} />}
        <Text
          fontWeight="600"
          style={[
            styles.text,
            {
              color:
                props.variant === "contained" ? colors.white : colors.primary,
            },
            props.textStyle,
          ]}
        >
          {props.children || "Press Me"}
        </Text>
      </Box>
    </Pressable>
  );
};

export default Button;
