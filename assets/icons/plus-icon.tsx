import Svg, { Path } from "react-native-svg";
import { IconProps } from "./user-circle";

export default function PlusSVG({ width = 24, height = 24, color = "#6135FE"} : IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M3.75 12H20.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 3.75V20.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
