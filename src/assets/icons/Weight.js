import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const Weight = props => {
  const {color} = props;
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20.962 5.23A5.235 5.235 0 0015.732 0a5.235 5.235 0 00-5.23 5.23 5.236 5.236 0 004.73 5.205V23H3.037v1h14.926v-1h-1.731V10.435a5.236 5.236 0 004.73-5.206zm-5.23 4.229a4.234 4.234 0 01-4.23-4.23A4.234 4.234 0 0115.732 1a4.234 4.234 0 014.23 4.23 4.234 4.234 0 01-4.23 4.229z"
        fill={color}
      />
      <Path
        d="M16.232 1.344h-1v.972h1v-.972zM16.232 8.143h-1v.973h1v-.973zM19.618 4.73h-.973v1h.973v-1zM12.818 4.73h-.972v1h.972v-1zM16.024 5.635L13.866 7.19l-.585-.81 2.158-1.557.585.81zM4.867 21.983h7.85a.5.5 0 00.5-.5V14.67a.504.504 0 00-.12-.325l-.001-.002-1.448-1.671a.5.5 0 00-.377-.173H6.314a.5.5 0 00-.377.173l-1.448 1.671-.001.002a.496.496 0 00-.12.325v6.812a.5.5 0 00.5.5zM6.543 13.5h4.499l.582.671H5.96l.582-.671zm-1.176 1.671h6.85v5.812h-6.85V15.17z"
        fill={color}
      />
    </Svg>
  );
};
