import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const Payment = props => {
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
        d="M20 4H4a3 3 0 00-3 3v1.1h22V7a3 3 0 00-3-3zM1 17V9.9h22V17a3 3 0 01-3 3H4a3 3 0 01-3-3zm12-2.9a.9.9 0 100 1.8h5a.9.9 0 100-1.8h-5z"
        fill="#045694"
      />
    </Svg>
  );
};
