import { Pressable, StyleSheet, Text } from "react-native";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";

const AppButton = (props: any) => {
  const { colors } = useTheme<Theme>();
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: props.disabled
            ? "#ccc"
            : pressed
            ? colors.primary + "10"
            : props.color || colors.primary,
        },
        styles.container,
        props.buttonStyles,
        { marginBottom: props.marginBottom },
      ]}
      disabled={props.disabled}
      onPress={props.onPress}
      accessible
      accessibilityLabel={props.accessibilityLabel || "A Button"}
    >
      <Text
        style={[
          styles.text,
          props.textStyles,
          { color: props.textStyles || "white" },
        ]}
      >
        {props.children || "Press Me"}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: "center",
    borderRadius: 32,
    width: 320,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    borderColor: "#6135FE",
    borderWidth: 1,
  },
  text: { fontSize: 18 },
});

export default AppButton;
