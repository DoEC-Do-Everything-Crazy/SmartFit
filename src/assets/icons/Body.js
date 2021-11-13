import * as React from 'react';
import Svg, {Path, Defs, ClipPath, G} from 'react-native-svg';
export const Body = props => {
  const {color} = props;
  return (
    <Svg
      width={80}
      height={80}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#prefix__clip0_1882_6683)" fill={color}>
        <Path d="M40 17.5A8.75 8.75 0 1040 0a8.75 8.75 0 000 17.5zM68.281 20H11.72a4.22 4.22 0 000 8.437h15.918c1.08 0 2.344.483 3.06 2.344.836 2.161.426 6.334-.09 9.567l-.674 3.82a.066.066 0 01-.019.055l-5.406 30.752a4.286 4.286 0 003.46 4.96 4.227 4.227 0 004.91-3.484l3.736-21.375S37.813 50 40 50c2.223 0 3.397 5.076 3.397 5.076l3.736 21.394a4.256 4.256 0 108.378-1.5l-5.408-30.752a.07.07 0 00-.017-.054l-.677-3.82c-.515-3.233-.925-7.407-.089-9.568.713-1.856 2.017-2.343 3.013-2.343H68.28a4.22 4.22 0 000-8.438V20z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_1882_6683">
          <Path fill="#fff" d="M0 0h80v80H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
