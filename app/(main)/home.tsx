import React from "react";
import Box from "@/components/ui/box";
import Text from "@/components/ui/text";
import ScreenContainer from "@/components/ui/screen-container";
import {
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import UserCircleSVG from "@/assets/icons/user-circle";
import { Link } from "expo-router";
import HomeCardEdit from "@/assets/icons/home-card-edit";
import EnvelopeSVG from "@/assets/icons/envelope";
import { LinearGradient } from "expo-linear-gradient";

function LinearGradientIcon({ children }: { children: React.ReactNode }) {
  return (
    <Box
      position="relative"
      width={50}
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius={22}
      overflow="hidden"
    >
      <LinearGradient
        colors={["rgba(97, 53, 254, 0.252)", "rgba(153, 153, 153, 0)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ ...StyleSheet.absoluteFillObject }}
        // @ts-ignore
        alignItems="center"
        justifyContent="center"
      >
        {children}
      </LinearGradient>
    </Box>
  );
}

function HomeHeading() {
  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <Box flexDirection="row" py="default" gap="xs" alignItems="center">
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: 30, height: 30 }}
        />
        <Text variant="h3">CraftMyCV</Text>
      </Box>
      <Link href={"/"} asChild>
        <Pressable>
          <UserCircleSVG width={36} height={36} />
        </Pressable>
      </Link>
    </Box>
  );
}

export default function Home() {
  return (
    <ScreenContainer>
      <Box px="default">
        <HomeHeading />
        <ScrollView>
          <Box py="l">
            <Text variant="h1">Ready to Build Your {"\n"}Next Resume?</Text>
          </Box>

          <Box flexDirection="row" gap="m">
            <Box
              flex={1}
              position="relative"
              borderRadius={16}
              overflow="hidden"
              height={160}
              style={{ padding: 1.5 }}
            >
              <ImageBackground
                resizeMode="cover"
                source={require("@/assets/images/gradient-bg.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  transform: [
                    { rotate: "90deg" },
                    { scale: 1.4 },
                    { translateY: 20 },
                  ],
                }}
                imageStyle={{ resizeMode: "cover" }}
              />
              <Box
                zIndex={1}
                p="m"
                justifyContent="space-between"
                style={{
                  ...StyleSheet.absoluteFillObject,
                  backgroundColor: "#6135FE52",
                }}
              >
                <LinearGradientIcon>
                  <HomeCardEdit />
                </LinearGradientIcon>
                <Box>
                  <Text variant="h3" color="white">
                    Create
                  </Text>
                  <Text variant="h2" color="white">
                    Resume
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              flex={1}
              position="relative"
              height={160}
              borderRadius={16}
              overflow="hidden"
              alignItems="center"
              justifyContent="center"
              style={{ padding: 1.5 }}
            >
              <ImageBackground
                resizeMode="cover"
                source={require("@/assets/images/gradient-bg.png")}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  width: "100%",
                  height: "100%",
                  transform: [{ scale: 1.4 }, { translateY: 20 }],
                }}
                imageStyle={{ resizeMode: "cover" }}
              />
              <Box
                bg="white"
                width={"100%"}
                height={"100%"}
                borderRadius={14}
                overflow="hidden"
                p="m"
              >
                <Box justifyContent="space-between" height={"100%"}>
                  <LinearGradientIcon>
                    <EnvelopeSVG />
                  </LinearGradientIcon>
                  <Box>
                    <Text variant="h3" style={{ color: "#9578FE" }}>
                      Create
                    </Text>
                    <Text variant="h2" style={{ color: "#4526B4" }}>
                      Cover Letter
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box py="default">
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              aut ducimus distinctio, necessitatibus voluptate voluptatum sint
              mollitia est eligendi sequi culpa, fugit facere, ab id incidunt?
              Expedita vel eius esse!
            </Text>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              aut ducimus distinctio, necessitatibus voluptate voluptatum sint
              mollitia est eligendi sequi culpa, fugit facere, ab id incidunt?
              Expedita vel eius esse!
            </Text>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              aut ducimus distinctio, necessitatibus voluptate voluptatum sint
              mollitia est eligendi sequi culpa, fugit facere, ab id incidunt?
              Expedita vel eius esse!
            </Text>
          </Box>
        </ScrollView>
      </Box>
    </ScreenContainer>
  );
}
