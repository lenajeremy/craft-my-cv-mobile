import { Pressable, StyleSheet, Text } from "react-native";

const AppButton = (props: any) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: props.disabled
            ? "#ccc"
            : pressed
              ? "#aa0000"
              : props.color || "#6135FE",
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
