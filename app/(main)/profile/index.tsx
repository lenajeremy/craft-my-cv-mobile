import Box from "@/components/ui/box";
import Text from "@/components/ui/text";
import ScreenContainer from "@/components/ui/screen-container";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import useLocalStore, { LOCAL_STORE_KEYS } from "@/hooks/useLocalStore";
import Button from "@/components/ui/button";
import { updateUser } from "@/store/userSlice";
import { router, useNavigation } from "expo-router";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@/theme";
import ManOnLaptopSVG from "@/assets/icons/man-on-laptop";
import ArrowRightSVG from "@/assets/icons/arrow-right";
import { Pressable } from "react-native";

export default function ProfileScreen() {
  const user = useAppSelector((state) => state.user);
  const { clearAll: clearAllKeys } = useLocalStore(LOCAL_STORE_KEYS.JWT_TOKEN);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const { colors } = useTheme<Theme>();

  return (
    <ScreenContainer showHeaderTitle headerTitle="Profile" scrollable>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        pt="none"
        py="s"
      >
        <Box gap="xs">
          <Text variant="h3">{user.name}</Text>
          <Text variant="body" color="mainText">
            {user.email}
          </Text>
        </Box>
        <Box
          borderRadius={16}
          style={{
            backgroundColor: colors.primaryFaded + "50",
            paddingVertical: 6,
            paddingHorizontal: 12,
          }}
        >
          <Text variant="small" font="Manrope-SemiBold" color="primary">
            {user.plan || "Free"}
          </Text>
        </Box>
      </Box>

      <Box g="default">
        {!user.hasValidSubscription ? (
          <Pressable onPress={() => router.navigate("/payment-options")}>
            <Box
              flexDirection="row"
              borderWidth={1}
              style={{ borderColor: "#EFEBFF" }}
              px="m"
              py="m"
              pt="default"
              mt="default"
              borderRadius={16}
              position="relative"
            >
              <Box
                position="absolute"
                backgroundColor="primary"
                px="s"
                py="xs"
                borderRadius={100}
                top={-12}
                left={16}
              >
                <Text font="Manrope-Bold" color="white" variant="small">
                  Save 12.5%
                </Text>
              </Box>
              <Box flex={1} gap="xs">
                <Text variant="h3">Upgrade to Pro</Text>
                <Text lineHeight={24} pr="m" color="mutedText">
                  Enjoy full customization, advanced AI-driven suggestions to
                  stand out in your job search.
                </Text>
              </Box>
              <ManOnLaptopSVG />
            </Box>
          </Pressable>
        ) : null}

        <Box
          borderWidth={1}
          borderColor="border"
          borderRadius={16}
          py="xs"
          mt={user.hasValidSubscription ? "l" : "none"}
        >
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            borderColor="border"
            borderBottomWidth={1}
            style={{
              paddingVertical: 20,
              paddingHorizontal: 16,
            }}
          >
            <Text variant="title" font="Manrope-Regular" color="mainText">
              Rate our app
            </Text>
            <ArrowRightSVG />
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            borderBottomWidth={1}
            borderColor="border"
            style={{
              paddingVertical: 20,
              paddingHorizontal: 16,
            }}
          >
            <Text variant="title" font="Manrope-Regular" color="mainText">
              Send Feedback
            </Text>
            <ArrowRightSVG />
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ paddingVertical: 20, paddingHorizontal: 16 }}
          >
            <Text variant="title" font="Manrope-Regular" color="mainText">
              Help Center
            </Text>
            <ArrowRightSVG />
          </Box>
        </Box>

        <Box borderWidth={1} borderColor="border" borderRadius={16} py="xs">
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            borderBottomWidth={1}
            borderColor="border"
            style={{
              paddingVertical: 20,
              paddingHorizontal: 16,
            }}
          >
            <Text variant="title" font="Manrope-Regular" color="mainText">
              Privacy Policy
            </Text>
            <ArrowRightSVG />
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            borderBottomWidth={1}
            borderColor="border"
            style={{
              paddingVertical: 20,
              paddingHorizontal: 16,
            }}
          >
            <Text variant="title" font="Manrope-Regular" color="mainText">
              Terms of Use
            </Text>
            <ArrowRightSVG />
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ paddingVertical: 20, paddingHorizontal: 16 }}
          >
            <Text variant="title" font="Manrope-Regular" color="mainText">
              Share
            </Text>
            <ArrowRightSVG />
          </Box>
        </Box>

        <Button
          variant="outlined"
          buttonStyles={{
            borderColor: "#FCECEC",
            borderWidth: 1.5,
            width: "50%",
            alignSelf: "center",
            marginBottom: 100,
          }}
          textStyle={{ color: "#F08F8F", fontFamily: "Manrope-Bold" }}
          onPress={async () => {
            clearAllKeys();
            dispatch(
              updateUser({
                email: "",
                name: "",
                token: "",
                userId: "",
                plan: "",
                hasValidSubscription: false,
              })
            );

            navigation.reset({
              index: 0,
              routes: [{ name: "index" as never }],
            });
          }}
        >
          Sign Out
        </Button>
      </Box>
    </ScreenContainer>
  );
}
