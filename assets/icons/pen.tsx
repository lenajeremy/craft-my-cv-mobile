import Svg, { Path, Circle } from "react-native-svg";

export default function PenSVG() {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <Circle cx="12" cy="12" r="12" fill="#EFEBFF" />
      <Path
        d="M9.5 18.8751H5.75C5.58424 18.8751 5.42527 18.8093 5.30806 18.692C5.19085 18.5748 5.125 18.4159 5.125 18.2501V14.7587C5.12508 14.5932 5.19082 14.4344 5.30781 14.3173L14.9422 4.68291C15.0594 4.56579 15.2183 4.5 15.384 4.5C15.5497 4.5 15.7086 4.56579 15.8258 4.68291L19.3172 8.17198C19.4343 8.28917 19.5001 8.44808 19.5001 8.61377C19.5001 8.77946 19.4343 8.93837 19.3172 9.05557L9.5 18.8751Z"
        stroke="#6135FE"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.875 18.875H9.5"
        stroke="#6135FE"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.625 7L17 11.375"
        stroke="#6135FE"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
