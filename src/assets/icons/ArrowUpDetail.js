import React from 'react';

import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';

export const ArrowUpDetail = props => {
  const {color} = props;
  return (
    <Svg
      width={100}
      height={50}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#prefix__clip0_1702:6684)">
        <Path
          d="M98.181 31.704L52.727 14.66c-1.616-.606-3.838-.606-5.454 0L1.818 31.704c-2.008.754-2.415 2.178-.909 3.182.893.596 2.258.91 3.64.91.95 0 1.906-.149 2.724-.455l42.726-16.023 42.728 16.023c2.009.753 4.858.55 6.364-.455 1.506-1.004 1.099-2.428-.91-3.182z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_1702:6684">
          <Path fill={color} d="M0 0h100v50H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
