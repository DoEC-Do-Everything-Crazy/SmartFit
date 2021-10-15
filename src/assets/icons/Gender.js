import * as React from 'react';
import Svg, {Path, Ellipse} from 'react-native-svg';
export const Gender = props => {
  const {color} = props;
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
        d="M17.25 1.5a.75.75 0 010-1.5h6a.75.75 0 01.75.75v6a.75.75 0 11-1.5 0V2.56l-5.175 5.175a6 6 0 01-4.575 8.72V19.5H15a.75.75 0 110 1.5h-2.25v2.25a.75.75 0 11-1.5 0V21H9a.75.75 0 110-1.5h2.25v-3.045a6 6 0 115.207-9.972L21.44 1.5h-4.19zm-1.495 6.519a4.5 4.5 0 10-7.509 4.966 4.5 4.5 0 007.509-4.967v.001z"
        fill={color}
      />
    </Svg>
  );
};
