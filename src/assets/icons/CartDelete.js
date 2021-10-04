import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
export const CartDelete = props => {
  return (
    <Svg
      width={45}
      height={45}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={22.5} cy={22.5} r={22.5} fill="#DF2C2C" />
      <Path
        d="M24.333 21.667l-.2 4.666m-2.266 0l-.2-4.666M19 19l.542 8.133A2 2 0 0021.538 29h2.924a2 2 0 001.996-1.867L27 19m-8 0h2m-2 0h-1.333M27 19h1.333M27 19h-2m0 0v0a2 2 0 00-2-2v0a2 2 0 00-2 2v0m4 0h-4"
        stroke="#fff"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
