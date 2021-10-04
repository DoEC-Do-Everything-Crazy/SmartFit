import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const Cancel = props => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16.95 7.05l-9.9 9.9M7.05 7.05l9.9 9.9"
        stroke="#9098B1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
