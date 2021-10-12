import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
export const Filter = props => {
  const {color} = props;
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M19 8.4a.9.9 0 100-1.8v1.8zm-9-1.8a.9.9 0 100 1.8V6.6zm9 0h-9v1.8h9V6.6zM14 17.4a.9.9 0 100-1.8v1.8zm-9-1.8a.9.9 0 100 1.8v-1.8zm9 0H5v1.8h9v-1.8z"
        fill={color}
      />
      <Circle cx={6} cy={7.5} r={4} stroke={color} strokeWidth={1.8} />
      <Circle cx={18} cy={16.5} r={4} stroke={color} strokeWidth={1.8} />
    </Svg>
  );
};
