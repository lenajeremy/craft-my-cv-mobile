import Box from "./ui/box";
import Text from "./ui/text";
import { Image } from "react-native";

export type TemplatePreviewProps = {
  image: string;
  name: string;
};

export default function TemplatePreview({ image, name }: TemplatePreviewProps) {
  return (
    <Box>
      <Image
        source={{ uri: image }}
        style={{ width: "100%", height: 200, borderRadius: 16 }}
      />

      <Text>{name}</Text>
    </Box>
  );
}
