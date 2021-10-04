import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const List = props => {
  return (
    <Svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9 3.667a.9.9 0 10-1.8 0v2.1H7a3.9 3.9 0 00-3.9 3.9V25A3.9 3.9 0 007 28.9h18a3.9 3.9 0 003.9-3.9V9.667a3.9 3.9 0 00-3.9-3.9h-2.1v-2.1a.9.9 0 10-1.8 0v2.1H10.9v-2.1zM4.9 25V12h22.2v13a2.1 2.1 0 01-2.1 2.1H7A2.1 2.1 0 014.9 25zM9 14.433a.9.9 0 000 1.8h2a.9.9 0 100-1.8H9zm6 0a.9.9 0 000 1.8h2a.9.9 0 100-1.8h-2zm6 0a.9.9 0 000 1.8h2a.9.9 0 100-1.8h-2zm-12 4a.9.9 0 000 1.8h2a.9.9 0 100-1.8H9zm6 0a.9.9 0 000 1.8h2a.9.9 0 100-1.8h-2zm6 0a.9.9 0 000 1.8h2a.9.9 0 100-1.8h-2zm-12 4a.9.9 0 000 1.8h2a.9.9 0 100-1.8H9zm6 0a.9.9 0 000 1.8h2a.9.9 0 100-1.8h-2zm6 0a.9.9 0 000 1.8h2a.9.9 0 100-1.8h-2z"
        fill="#262F56"
        stroke={1}
      />
    </Svg>
  );
};
