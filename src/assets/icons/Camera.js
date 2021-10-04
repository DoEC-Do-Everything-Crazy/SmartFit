import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
export const Camera = props => {
  return (
    <Svg
      width={52}
      height={52}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={26} cy={26} r={26} fill="#045694" />
      <Path
        d="M26 29.466a3.467 3.467 0 100-6.933 3.467 3.467 0 000 6.933z"
        fill="#fff"
      />
      <Path
        d="M22.75 15.166l-1.982 2.167h-3.435a2.173 2.173 0 00-2.166 2.167v13c0 1.191.975 2.166 2.166 2.166h17.334a2.173 2.173 0 002.166-2.166v-13a2.173 2.173 0 00-2.166-2.167h-3.434l-1.983-2.166h-6.5zM26 31.416A5.419 5.419 0 0120.583 26 5.419 5.419 0 0126 20.583 5.419 5.419 0 0131.417 26 5.419 5.419 0 0126 31.416z"
        fill="#fff"
      />
    </Svg>
  );
};
