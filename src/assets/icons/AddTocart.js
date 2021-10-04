import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
export const AddTocart = props => {
  return (
    <Svg
      width={45}
      height={45}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={22.5} cy={22.5} r={22.5} fill="#DF2C2C" />
      <Path
        d="M28.766 17.213a4.215 4.215 0 00-1.366-.898 4.271 4.271 0 00-4.589.898l-.811.798-.812-.798A4.247 4.247 0 0018.211 16a4.248 4.248 0 00-2.978 1.213A4.105 4.105 0 0014 20.141c0 1.098.444 2.15 1.233 2.927l.812.798L22 29.721l5.955-5.855.811-.798c.391-.384.702-.84.913-1.343a4.08 4.08 0 00-.913-4.512v0z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
