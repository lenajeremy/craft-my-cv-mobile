import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { BoxProps, useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import TextInput, { TextInputProps } from "./textinput";
import Box from "./box";
import { StyleSheet } from "react-native";
import { LikeDate } from "@/http/types";

export type DatePickerProps = {
  currentDate: LikeDate;
  onChange: (newDate: Date) => void;
  datePickerContainerProps?: BoxProps<Theme>;
  datePickerProps?: React.ComponentProps<typeof DateTimePicker>;
  presentSelectionText?: string;
} & Omit<TextInputProps, "onChangeText" | "value">;

export default function DatePicker({
  currentDate = new Date(),
  onChange,
  presentSelectionText,
  datePickerContainerProps,
  ...inputProps
}: DatePickerProps) {
  const { colors } = useTheme<Theme>();
  const dateText = React.useMemo(() => {
    if (currentDate === "Present") {
      return presentSelectionText ?? "Present";
    } else if (!currentDate) {
      return "Please select a date";
    } else {
      return currentDate.toDateString();
    }
  }, [currentDate, presentSelectionText]);

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
            height: "70%",
            width: "70%",
          }}
          value={currentDate === "Present" ? new Date() : currentDate}
          mode="date"
          onChange={(_, selectedDate) => selectedDate && onChange(selectedDate)}
        />
      </Box>
    </Box>
  );
}