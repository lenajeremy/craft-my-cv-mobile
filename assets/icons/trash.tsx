import Svg, { Path } from "react-native-svg";

export default function TrashSVG() {
  return (
    <Svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <Path
        d="M13.5 3.74219H2.5"
        stroke="#E95F5F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.5 1.74219H10.5"
        stroke="#E95F5F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5 3.74219V13.2422C12.5 13.3748 12.4473 13.502 12.3536 13.5957C12.2598 13.6895 12.1326 13.7422 12 13.7422H4C3.86739 13.7422 3.74021 13.6895 3.64645 13.5957C3.55268 13.502 3.5 13.3748 3.5 13.2422V3.74219"
        stroke="#E95F5F"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
    </Svg>
  );
}
