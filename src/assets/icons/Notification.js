import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const Notification = props => {
  const {color} = props;
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 2.5a7 7 0 00-7 7v4.47a1.32 1.32 0 01-1 1.28 1.32 1.32 0 00-1 1.28v.285c0 .93.754 1.685 1.685 1.685h14.63c.93 0 1.685-.754 1.685-1.685v-.284a1.32 1.32 0 00-1-1.281 1.32 1.32 0 01-1-1.28V9.5a7 7 0 00-7-7zM12 22c1.933 0 3.5-1.254 3.5-2.8 0-.242-.038-.476-.11-.7H8.61c-.072.224-.11.458-.11.7 0 1.546 1.567 2.8 3.5 2.8z"
        stroke={color}
        strokeWidth={2.5}
      />
    </Svg>
  );
};
