import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const CameraTouch = props => {
  const {color} = props;
  return (
    <Svg
      width={38}
      height={38}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M23.005 3.397c1.053 0 2.033.543 2.59 1.437l2.065 3.309h3.215a4.41 4.41 0 014.41 4.41v16.965a4.41 4.41 0 01-4.41 4.41H7.125a4.41 4.41 0 01-4.411-4.41V12.554a4.41 4.41 0 014.41-4.411h3.486l1.877-3.227a3.053 3.053 0 012.64-1.519h7.878zM19 12.897a7.464 7.464 0 100 14.928 7.464 7.464 0 000-14.928zm0 2.035a5.429 5.429 0 110 10.857 5.429 5.429 0 010-10.857z"
        fill={color}
      />
    </Svg>
  );
};
