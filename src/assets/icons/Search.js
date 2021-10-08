import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
export const Search = props => {
  const {color} = props;
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={10} cy={10} r={7.5} stroke={color} strokeWidth={1.8} />
      <Path
        d="M21 21l-5.5-5.5"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
