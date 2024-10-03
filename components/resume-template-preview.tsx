import Box from "./ui/box";
import Checkbox from "./ui/radio";
import Text from "./ui/text";
import { Image, Pressable } from "react-native";

export type ResumeTemplatePreviewProps = {
  id: string;
  image: string;
  name: string;
  width: number;
  description: string;
  selected: boolean;
  onSelect: (v: string) => void;
};

export default function ResumeTemplatePreview({
  image,
  name,
  description,
  selected,
  onSelect,
  id,
  width: templateWidth,
}: ResumeTemplatePreviewProps) {
  return (
    <Pressable onPress={() => onSelect(id)}>
      <Box
        width={templateWidth}
        borderRadius={20}
        py="s"
        flex = {0.75}
        borderWidth={1}
        borderColor={selected ? "primaryFaded" : "border"}
        style={{ paddingHorizontal: 10 }}
      >
        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: 350,
            marginBottom: 16,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
          resizeMode="contain"
        />

        <Box
          px="s"
          mb="s"
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box gap="xs" width={"80%"}>
            <Text fontWeight="bold">{name}</Text>
            <Text variant="title">{description}</Text>
          </Box>
          <Checkbox checked={selected} onPress={() => {}} value={name} />
        </Box>
      </Box>
    </Pressable>
  );
}
