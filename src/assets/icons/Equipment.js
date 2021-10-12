import * as React from 'react';
import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';
export const Equipment = props => {
  const {color} = props;
  return (
    <Svg
      width={44}
      height={44}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#prefix__clip0)" fill={color}>
        <Path d="M8.33 27.043a1.77 1.77 0 000 2.501l6.126 6.125c.69.69 1.811.69 2.501 0l.84-.839-8.627-8.626-.84.839zM23.06 9.704l-2.728 2.728a1.77 1.77 0 000 2.501l3.617 3.617-5.398 5.398-3.617-3.617a1.77 1.77 0 00-2.5 0L9.705 23.06a1.77 1.77 0 000 2.501l8.734 8.735c.69.69 1.811.69 2.501 0l2.728-2.728a1.77 1.77 0 000-2.501l-3.617-3.617 5.398-5.398 3.617 3.617c.69.69 1.811.69 2.5 0l2.729-2.728a1.77 1.77 0 000-2.501L25.56 9.704a1.77 1.77 0 00-2.5 0zM27.043 8.331l-.84.84 8.627 8.626.839-.84a1.77 1.77 0 000-2.5L29.544 8.33a1.77 1.77 0 00-2.501 0z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path
            fill={color}
            transform="rotate(-45 26.95 10.05)"
            d="M0 0h30v30H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
