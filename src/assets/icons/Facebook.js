import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const Facebook = props => {
  return (
    <Svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M24 2.667h-4a6.667 6.667 0 00-6.667 6.666v4h-4v5.334h4v10.666h5.334V18.667h4L24 13.333h-5.333v-4A1.334 1.334 0 0120 8h4V2.667z"
        fill="#4092FF"
      />
    </Svg>
  );
};
