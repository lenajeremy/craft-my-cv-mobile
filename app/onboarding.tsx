import Button from "@/components/ui/button";
import { Text, View, StyleSheet, Image } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import ThemedText from "@/components/ui/text";

function Onboarding() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Image
        source={require("@/assets/images/caro1.png")}
        style={{ width: 250, height: 250, alignSelf: "center" }}
        alt="any"
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: 70,
          marginTop: 20,
          justifyContent: "flex-start",
          alignContent: "flex-start",
          alignItems: "flex-start",
          marginLeft: 40,
        }}
      >
        <ThemedText variant="h1">Create Professional</ThemedText>
        <Text style={[styles.text]}>Resume In Minutes</Text>
        <Text style={[styles.subText]}>
          Craft stunning, job-winning resumes with our AI-powered tools. Choose
          from a variety of templates and customize them to fit your career
          goals.
        </Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <Button marginBottom={20}>Get Started</Button>
        <Button
          color="white"
          textColor="#6135FE"
          onPress={() => {
            router.push("/signup");
          }}
        >
          Sign In
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: "bold",
    width: 320,
  },
  subText: {
    fontSize: 16,
    fontWeight: 400,
    marginTop: 20,
    width: 320,
  },
});

export default Onboarding;
