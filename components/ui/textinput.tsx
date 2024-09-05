import * as React from "react";
import {
  TextInput as NativeTextInput,
  type TextInputProps as NativeTextInputProps,
  StyleSheet,
} from "react-native";
import Box, { type BoxProps } from "./box";
import Text from "./text";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";

export type TextInputProps = {
  showLabel?: boolean;
  label?: string;
  containerProps?: BoxProps;
} & NativeTextInputProps;

export default function TextInput(props: TextInputProps) {
  const { containerProps, showLabel, label, ...inputProps } = props;
  const { colors, spacing, textVariants } = useTheme<Theme>();

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        textInput: {
          ...textVariants.title,
          paddingTop: spacing.m,
          paddingBottom: spacing.s,
        },
      }),
    [spacing, textVariants]
  );

  return (
    <Box
      {...{
        borderBottomWidth: 1,
        borderBottomColor: "border",
        padding: "s",
        ...containerProps,
      }}
    >
      {props.showLabel && <Text color="mainText" variant="small">{props.label}</Text>}
      <NativeTextInput
        {...inputProps}
        // @ts-ignore
        style={[styles.textInput, inputProps.style]}
        placeholderTextColor={colors.mutedText + "50"}
      />
    </Box>
  );
}
