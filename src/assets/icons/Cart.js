import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
export const Cart = props => {
  const {color} = props;
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1 2.5h1.654c.479 0 .718 0 .912.087a1 1 0 01.423.355c.119.177.16.413.242.884L4.609 6m0 0l.883 5.077c.179 1.03.269 1.546.534 1.917a2 2 0 00.937.714c.428.157.949.107 1.99.006l9.661-.935c1.016-.098 1.524-.147 1.908-.376a2 2 0 00.788-.867c.19-.405.19-.915.19-1.935v0c0-1.085 0-1.628-.208-2.047a2 2 0 00-.852-.877c-.413-.22-.955-.237-2.04-.269L4.61 6z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={8.5} cy={19} r={2} stroke={color} />
      <Circle cx={18} cy={19} r={2} stroke={color} />
    </Svg>
  );
};
