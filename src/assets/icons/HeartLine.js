import * as React from 'react';
import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';
export const HeartLine = props => {
  const {color} = props;
  return (
    <Svg
      width={30}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M26.781 3.13c-1.483-1.13-3.12-1.704-4.864-1.704-2.2 0-4.578.94-6.917 2.726-2.338-1.787-4.715-2.726-6.916-2.726-1.745 0-3.381.573-4.864 1.704C1.05 4.784-.033 6.872 0 9.335c.117 8.433 13.812 18.384 14.395 18.804l.604.435.605-.435c.583-.42 14.278-10.371 14.395-18.804.034-2.463-1.05-4.551-3.219-6.205zm-5.553 17.433c-2.536 2.55-5.094 4.58-6.228 5.444-1.133-.865-3.691-2.894-6.227-5.444C4.43 16.193 2.112 12.3 2.071 9.305c-.025-1.796.762-3.277 2.404-4.53 1.114-.849 2.328-1.28 3.609-1.28 2.423 0 4.738 1.51 6.253 2.775l.663.555.664-.555c1.515-1.265 3.83-2.775 6.253-2.775 1.28 0 2.495.431 3.609 1.28 1.642 1.253 2.428 2.734 2.404 4.53-.04 2.996-2.359 6.889-6.702 11.258z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill={color} d="M0 0h30v30H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};