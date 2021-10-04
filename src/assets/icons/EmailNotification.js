import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const EmailNotification = props => {
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
        d="M20.546 4H3.454A1.954 1.954 0 002.37 7.58l1.185.79 6.78 4.52a3 3 0 003.328 0l6.782-4.52 1.185-.79A1.954 1.954 0 0020.546 4zM2 11c0-.209.021-.413.062-.61.114-.554.772-.698 1.244-.383l6.198 4.132a4.5 4.5 0 004.992 0l6.198-4.132c.472-.315 1.13-.171 1.244.384.04.196.062.4.062.609v7a2 2 0 01-2 2H4a2 2 0 01-2-2v-7z"
        fill={color}
      />
    </Svg>
  );
};
