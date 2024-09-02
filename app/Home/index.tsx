import AppButton from "@/createCVComponents/Button";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("@/assets/images/caro1.png")}
        style={{ width: 250, height: 250 }}
        alt="any"
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: 70,
        }}
      >
        <Text style={[styles.text]}> Create Professional</Text>
        <Text style={[styles.text]}> Resume In Minutes</Text>
      </View>
      <AppButton marginBottom={20}>Get Started</AppButton>
      <AppButton color="white" textStyles="#6135FE">
        Sign In
      </AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
