import { View, TextInput, StyleSheet, Text } from "react-native";

type Props = {
  label: string;
};
export default function TextComponent(props: Props) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Text style={[styles.label]}>input</Text>
      <TextInput style={[styles.input]} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 56,
    width: 320,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 12,
    borderRadius: 8,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 12,
  },
});
