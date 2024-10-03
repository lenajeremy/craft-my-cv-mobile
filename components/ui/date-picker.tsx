import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { BoxProps, useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import TextInput, { TextInputProps } from "./textinput";
import Box from "./box";
import { Pressable, StyleSheet } from "react-native";

export type DatePickerProps = {
  currentDate: Date;
  onChange: (newDate: Date) => void;
  datePickerContainerProps?: BoxProps<Theme>;
} & Omit<TextInputProps, "onChangeText" | "value">;

export default function DatePicker({
  currentDate = new Date(),
  onChange,
  datePickerContainerProps,
  ...inputProps
}: DatePickerProps) {
  const { colors } = useTheme<Theme>();

  const [show, setShow] = React.useState(false);
  const dateText = React.useMemo(() => {
    if (!currentDate) {
      return "Please select a date";
    } else {
      return currentDate.toDateString();
    }
  }, [currentDate]);

  return (
    <Box {...datePickerContainerProps}>
      <Box position="relative">
        <TextInput {...inputProps} value={dateText} disabled />
        <DateTimePicker
          accentColor={colors.primary}
          style={{
            ...StyleSheet.absoluteFillObject,
            opacity: 0.011,
            top: "30%",
            height: '70%',
            width: "70%",
          }}
          value={currentDate}
          mode="date"
          onChange={(_, selectedDate) => selectedDate && onChange(selectedDate)}
        />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  pressable: {
    ...StyleSheet.absoluteFillObject,
  },
});
