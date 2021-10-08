import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const Right = props => {
  const {color} = props;
  return (
    <Svg
      width={14}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5 10l4-4-4-4"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
