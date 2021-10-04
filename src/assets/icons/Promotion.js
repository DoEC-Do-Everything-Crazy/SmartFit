import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const Promotion = props => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6v4.757a3 3 0 00.879 2.122l8 8a3 3 0 004.242 0l4.758-4.758a3 3 0 000-4.242l-8-8A3 3 0 0010.757 3H6a3 3 0 00-3 3zm6 5a2 2 0 100-4 2 2 0 000 4z"
        fill="#045694"
      />
    </Svg>
  );
};
