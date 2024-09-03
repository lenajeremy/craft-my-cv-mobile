import { Text, View, StyleSheet, Image } from "react-native";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import TextComponent from "@/components/TextComponent";

export default function Signup() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#FFFFFF",
        paddingTop: 50,
        height: "100%",
      }}
    >
      <View style={[styles.headerStyle]}>
        <Image
          style={{ width: 22.7, height: 24 }}
          source={require("@/assets/images/logo.png")}
        />
        <Text style={[styles.logoText]}>CraftMyCV</Text>
      </View>
      <View style={[styles.subText]}>
        <Text style={{ fontSize: 12, fontWeight: 500, marginTop: 20 }}>
          Your Path To Professional Success
        </Text>
      </View>
      <View style={{ marginTop: 30, paddingLeft: 35, paddingRight: 35 }}>
        <Text style={{ fontSize: 24, marginBottom: 40 }}>
          Create An Account
        </Text>
        <TextComponent label={"Name"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    display: "flex",
    flexDirection: "row",
    width: "100%",

    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 20,
    marginLeft: 10,
    // fontWeight: "bold",
    // width: 320,
  },
  subText: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
