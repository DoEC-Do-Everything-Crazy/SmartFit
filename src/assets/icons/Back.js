import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const Back = props => {
  const {color} = props;
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.5 16.5L4 12m0 0l4.5-4.5M4 12h16"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
