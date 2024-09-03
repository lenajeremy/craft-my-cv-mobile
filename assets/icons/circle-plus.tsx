import Svg, { Path } from "react-native-svg";
import { type IconProps } from "./user-circle";

export default function CirclePlusSVG({
  width = 24,
  height = 24,
  color = "#7C8289",
}: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <Path
        d="M12 21.2422C16.9706 21.2422 21 17.2128 21 12.2422C21 7.27162 16.9706 3.24219 12 3.24219C7.02944 3.24219 3 7.27162 3 12.2422C3 17.2128 7.02944 21.2422 12 21.2422Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <Path
        d="M8.25 12.2422H15.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 8.49219V15.9922"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
