import Button from "@/components/ui/button";
import { ScrollView, useWindowDimensions, SafeAreaView } from "react-native";
import Text from "@/components/ui/text";
import Box from "@/components/ui/box";
import OnboardingSvg1 from "@/assets/icons/onboarding-svg-1";
import OnboardingSvg2 from "@/assets/icons/onboarding-svg-2";
import OnboardingSvg3 from "@/assets/icons/onboarding-svg-3";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import { router } from "expo-router";
import useLocalStore from "@/hooks/useLocalStore";

function Onboarding() {
  const [, setHasSeenOnboarding] = useLocalStore<boolean>("hasSeenOnboarding")

  const pages: OnboardinPageProps[] = [
    {
      title: "Create Professional Resumes in Minutes",
      subtitle:
        "Craft stunning, job-winning resumes with our AI-powered tools. Choose from a variety them to fit your career goals.",
      isLast: false,
      image: <OnboardingSvg1 width={270} height={270} />,
      color: "hotpink",
    },
    {
      title: "Crafted Templates for Every Career Path",
      subtitle:
        "Choose from a variety of templates and customize them to fit your career goals. Whether you're in tech or healthcare.",
      isLast: false,
      image: <OnboardingSvg2 width={270} height={270} />,
      color: "blue",
    },
    {
      title: "Optimize Your Resume with AI Insights",
      subtitle:
        "Get real-time feedback on your resume's content, layout, and keywords. Ensure your resume passes through ATS with ease.",
      isLast: true,
      image: <OnboardingSvg3 width={270} height={270} />,
      color: "green",
    },
  ];

  const { colors } = useTheme<Theme>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.mainBackground,
        position: "relative",
      }}
    >
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {pages.map((page) => (
          <OnboardingPage {...page} key={page.title} />
        ))}
      </ScrollView>

      <Box position="absolute" px="xl" width={"100%"} bottom={"15%"} gap="s">
        <Button
        variant="contained"
          onPress={() => {
            setHasSeenOnboarding(true)
            router.replace("/(auth)/signup")
          }}
          buttonStyles={{ width: "100%" }}
        >
          Get Started
        </Button>

        <Button
          onPress={() => {
            setHasSeenOnboarding(true)
            router.replace("/(auth)/signin")
          }}
          buttonStyles={{ width: "100%" }}
          variant='outlined'>
          Sign In
        </Button>
      </Box>
    </SafeAreaView>
  );
}

export default Onboarding;

type OnboardinPageProps = {
  title: string;
  subtitle: string;
  isLast: boolean;
  image: React.ReactNode;
  color?: string;
};

function OnboardingPage(props: OnboardinPageProps) {
  const { width: DEVICE_WIDTH } = useWindowDimensions();
  return (
    <Box width={DEVICE_WIDTH} p="l" backgroundColor="mainBackground">
      <Box py="m" mb="m" alignSelf="center">
        {props.image}
      </Box>
      <Box py="xs">
        <Text
          textAlign="center"
          style={{ width: "90%", alignSelf: "center" }}
          fontSize={30}
          lineHeight={40}
          mb="s"
          variant="h1"
        >
          {props.title}
        </Text>
        <Text
          variant="title"
          textAlign="center"
          color="mainText"
          lineHeight={28}
          style={{ width: "95%", alignSelf: "center" }}
        >
          {props.subtitle}
        </Text>
      </Box>
    </Box>
  );
}
