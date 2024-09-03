import Svg, { Path } from "react-native-svg";
import { IconProps } from "./user-circle";

export default function ArrowLeftSVG({ width = 24, height = 24, color = "#7C8289" }: IconProps) {
  return (
<Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 19.5L7.5 12L15 4.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
