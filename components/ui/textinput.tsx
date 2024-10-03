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
  renderSuffixElement?: (props: {
    toggleTextVisibility: () => void;
    isVisible: boolean;
  }) => React.ReactNode;
} & NativeTextInputProps;

export default function TextInput(props: TextInputProps) {
  const {
    containerProps,
    showLabel,
    label,
    onBlur,
    secureTextEntry,
    ...inputProps
  } = props;
  const { colors, spacing, textVariants } = useTheme<Theme>();
  const [focused, setFocused] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(secureTextEntry || false);

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        textInput: {
          ...textVariants.title,
          // lineHeight: 24,
          flex: 1,
          color: colors.headingText,
          paddingVertical: props.variant === "outlined" ? spacing.s : 12,
        },
      }),
    [spacing, textVariants, props.variant, colors]
  );

  return (
    <Box
      {...{
        ...inputContainerPropsFromVariant(props.variant, focused),
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
        borderColor={focused ? "primary" : "border"}
        borderWidth={props.variant === "outlined" ? 1 : 0}
        alignItems="center"
      >
        {props.PrefixElement}
        <NativeTextInput
          onFocus={() => setFocused(true)}
          autoCapitalize="none"
          onBlur={(e) => {
            onBlur && onBlur(e);
            setFocused(false);
          }}
          {...inputProps}
          // @ts-ignore
          style={[styles.textInput, inputProps.style]}
          secureTextEntry={isPassword}
        />
        {props.renderSuffixElement &&
          props.renderSuffixElement({
            isVisible: isPassword,
            toggleTextVisibility: () => setIsPassword(!isPassword),
          })}
      </Box>
    </Box>
  );
}

function inputContainerPropsFromVariant(
  v: TextInputProps["variant"],
  focused: boolean
): BoxProps {
  if (v === "outlined") {
    return {
      borderWidth: 0,
    };
  } else {
    return {
      borderBottomWidth: 1,
      borderBottomColor: focused ? "primary" : "border",
      paddingVertical: "xs",
    };
  }
}
