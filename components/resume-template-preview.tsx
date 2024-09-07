import Box from "./ui/box";
import Checkbox from "./ui/radio";
import Text from "./ui/text";
import { Image, Pressable } from "react-native";

export type ResumeTemplatePreviewProps = {
  image: number;
  name: string;
  width: number;
  description: string;
  selected: boolean;
  onSelect: (v: string) => void;
};

// TODO: Fix the image import to use live urls
export default function ResumeTemplatePreview({
  image,
  name,
  description,
  selected,
  onSelect,
  width: templateWidth,
}: ResumeTemplatePreviewProps) {
  return (
    <Pressable onPress={() => onSelect(name)}>
      <Box
        width={templateWidth}
        borderRadius={20}
        py="s"
        borderWidth={1}
        borderColor={selected ? "primaryFaded" : "border"}
        style={{ paddingHorizontal: 10 }}
      >
        <Image
          source={image}
          style={{
            width: "100%",
            height: 400,
          }}
          resizeMode="cover"
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
