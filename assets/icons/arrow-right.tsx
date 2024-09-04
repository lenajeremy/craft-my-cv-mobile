import Svg, { Path } from "react-native-svg";
import { IconProps } from "./user-circle";

export default function ArrowRightSVG({
  width = 24,
  height = 24,
  color = "#7C8289",
}: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M0.0625 23.9375V0.0625H23.9375V23.9375H0.0625Z"
        stroke={color}
        strokeWidth="0.125"
      />
      <Path
        d="M9 4.5L16.5 12L9 19.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
