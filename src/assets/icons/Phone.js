import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const Phone = props => {
  return (
    <Svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12.333 2H10.5A2.5 2.5 0 008 4.5v23a2.5 2.5 0 002.5 2.5h11a2.5 2.5 0 002.5-2.5v-23A2.5 2.5 0 0021.5 2h-1.833m-7.334 0L13 3.667h6L19.667 2m-7.334 0h7.334"
        stroke="#262F56"
        strokeWidth={1}
        strokeLinejoin="round"
      />
    </Svg>
  );
};
