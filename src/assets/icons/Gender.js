import * as React from 'react';
import Svg, {Path, Ellipse} from 'react-native-svg';
export const Gender = props => {
  const {color} = props;
  return (
    <Svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Ellipse
        cx={16}
        cy={8.667}
        rx={5.333}
        ry={6}
        stroke={color}
        strokeWidth={1}
      />
      <Path
        d="M26.667 25.333c0 4.667-5.334 3.334-10.667 3.334S5.333 30 5.333 25.333c0-2.666 4.776-6 10.667-6s10.667 3.334 10.667 6z"
        stroke={color}
        strokeWidth={1}
      />
    </Svg>
  );
};
