import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const Layout = props => {
  const {color} = props;
  return (
    <Svg
      width="198"
      height="130"
      viewBox="0 0 256 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.000302329 128C-0.499698 106.5 15.8003 63.5 85.0003 63.5C95.0669 63.5 105.106 63.649 114.989 63.7956C190.023 64.9091 256 65.8881 256 0.500015V141C256 145.418 252.418 149 248 149H8C3.60517 149 0.0380469 145.456 0.000302329 141.07V128Z"
        fill={color}
      />
    </Svg>
  );
};
