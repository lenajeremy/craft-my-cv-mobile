import AppButton from "@/createCVComponents/Button";
import { Text, View } from "react-native";
import Home from "./Home";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Home />
    </View>
  );
}
