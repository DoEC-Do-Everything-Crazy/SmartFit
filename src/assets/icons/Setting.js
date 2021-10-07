import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const Setting = props => {
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
        d="M13.9 3.723c-.449-2.297-3.736-2.297-4.184 0a2.131 2.131 0 01-3.077 1.482c-2.075-1.082-4.125 1.487-2.608 3.27a2.131 2.131 0 01-.76 3.33c-2.14.948-1.408 4.152.931 4.078a2.131 2.131 0 012.13 2.67c-.594 2.264 2.368 3.69 3.768 1.815a2.131 2.131 0 013.415 0c1.4 1.875 4.362.45 3.77-1.815a2.131 2.131 0 012.128-2.67c2.34.074 3.071-3.13.931-4.078a2.131 2.131 0 01-.76-3.33c1.517-1.782-.532-4.352-2.608-3.27a2.131 2.131 0 01-3.077-1.482zm-2.092 11.279a3 3 0 100-6 3 3 0 000 6z"
        fill={color}
      />
    </Svg>
  );
};
