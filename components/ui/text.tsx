import { createText } from "@shopify/restyle";
import { Theme } from "@/theme";
import { Font } from "@/constants";

type TextProps = Omit<React.ComponentProps<typeof RSText>, "fontFamily"> & {
  font?: Font;
};

const RSText = createText<Theme>();

const Text: React.FunctionComponent<TextProps> = (
  props = { font: "Manrope-Regular" }
) => {
  const { font, ...restProps } = props;
  return <RSText {...restProps} fontFamily={font} />;
};

export default Text;
