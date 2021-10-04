import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
export const Order = props => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M22 6.4a.9.9 0 100-1.8v1.8zM9 4.6a.9.9 0 100 1.8V4.6zm13 0H9v1.8h13V4.6zM22 12.9a.9.9 0 100-1.8v1.8zM9 11.1a.9.9 0 100 1.8v-1.8zm13 0H9v1.8h13v-1.8zM22 19.4a.9.9 0 100-1.8v1.8zM9 17.6a.9.9 0 100 1.8v-1.8zm13 0H9v1.8h13v-1.8z"
        fill="#045694"
      />
      <Circle cx={3.5} cy={5.5} r={1.25} stroke="#045694" strokeWidth={2.5} />
      <Circle cx={3.5} cy={12} r={1.25} stroke="#045694" strokeWidth={2.5} />
      <Circle cx={3.5} cy={18.5} r={1.25} stroke="#045694" strokeWidth={2.5} />
    </Svg>
  );
};
