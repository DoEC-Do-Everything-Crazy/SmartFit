import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const HeartPf = props => {
  const {color} = props;
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 21.054C-8 10 6-2 12 5.588 18-2 32 10 12 21.054z"
        fill={color}
      />
    </Svg>
  );
};
