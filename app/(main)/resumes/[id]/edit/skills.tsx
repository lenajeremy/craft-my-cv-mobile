import Box from "@/components/ui/box";
import Button from "@/components/ui/button";
import ScreenContainer from "@/components/ui/screen-container";
import Text from "@/components/ui/text";
import TextInput from "@/components/ui/textinput";
import { router } from "expo-router";
import React from "react";

export default function Skills() {
  const allSkills = React.useMemo(
    () =>
      [
        "HTML5 & CSS3",
        "Javascript (ES6)",
        "Javascript Frameworks & Libraries",
        "Typescript",
        "Go",
        "SwiftUI",
        "React Native",
        "Version Control",
        "Cross Browswer Compatibility",
        "Problem Solving",
        "Git",
        "Swift",
        "React",
      ].sort((a, b) => (a > b ? 1 : -1)),
    []
  );

  const [skills, setSkills] = React.useState(allSkills);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    if (search) {
      setSkills(
        allSkills.filter((s) => s.toLowerCase().includes(search.toLowerCase()))
      );
    } else {
      setSkills(allSkills);
    }
  }, [search, allSkills]);

  return (
    <ScreenContainer headerTitle="Skills" showHeaderTitle>
      <Box justifyContent="space-between" pb="s" flex={1}>
        <Box gap="m">
          <TextInput
            autoFocus
            showLabel
            label="What are your skills?"
            value={search}
            onChangeText={setSearch}
          />

          <Box gap="s" flexDirection="row" flexWrap="wrap">
            {skills.map((skill) => (
              <Box borderWidth={1.5} borderColor="border" p="s" key={skill}>
                <Text variant="small">{skill}</Text>
              </Box>
            ))}
          </Box>
        </Box>

        <Box alignItems="center">
          <Button variant="contained" onPress={() => router.replace("./professional-summary")}>
            Save
          </Button>
        </Box>
      </Box>
    </ScreenContainer>
  );
}
