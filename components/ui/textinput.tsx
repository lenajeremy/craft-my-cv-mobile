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
  variant?: "outlined" | "underline";
  PrefixElement?: React.ReactNode;
  SuffixElement?: React.ReactNode;
} & NativeTextInputProps;

export default function TextInput(props: TextInputProps) {
  const { containerProps, showLabel, label, ...inputProps } = props;
  const { colors, spacing, textVariants } = useTheme<Theme>();

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        textInput: {
          ...textVariants.title,
          lineHeight: 21,
          flex: 1,
          paddingVertical: props.variant === "outlined" ? spacing.s : 12,
        },
      }),
    [spacing, textVariants, props.variant]
  );

  return (
    <Box
      {...{
        ...inputContainerPropsFromVariant(props.variant),
        ...containerProps,
      }}
    >
      {props.showLabel && (
        <Text color="mainText" variant="small">
          {props.label}
        </Text>
      )}
      <Box
        borderRadius={8}
        marginTop="s"
        flexDirection="row"
        gap="s"
        style={{ padding: props.variant === "outlined" ? 10 : 0 }}
        borderColor="border"
        borderWidth={props.variant === "outlined" ? 1 : 0}
        alignItems="center"
      >
        {props.PrefixElement}
        <NativeTextInput
          {...inputProps}
          // @ts-ignore
          style={[styles.textInput, inputProps.style]}
          placeholderTextColor={colors.mutedText + "50"}
        />
        {props.SuffixElement}
      </Box>
    </Box>
  );
}

function inputContainerPropsFromVariant(
  v: TextInputProps["variant"]
): BoxProps {
  if (v === "outlined") {
    return {
      borderWidth: 0,
    };
  } else {
    return {
      borderBottomWidth: 1,
      borderBottomColor: "border",
      paddingVertical: "s",
    };
  }
}
