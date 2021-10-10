import React from 'react';

import Svg, {Path, Circle, G} from 'react-native-svg';

export const Tick = props => {
  return (
    <Svg width={19.5} height={19.5} viewBox="0 0 19.5 19.5" {...props}>
      <G
        data-name="icon/check"
        transform="translate(.746 .746)"
        fill="none"
        stroke="#34c3ba"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}>
        <Circle cx={9} cy={9} r={9} transform="translate(.004 .004)" />
        <Path d="M5.446 9.343l2.168 2.168-.014-.014 4.891-4.891" />
      </G>
    </Svg>
  );
};
