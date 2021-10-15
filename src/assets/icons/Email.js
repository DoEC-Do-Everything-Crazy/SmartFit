import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const Email = props => {
  const {color} = props;
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M22.395 5.983h-.734V17.65H1.971v.734h20.424V5.983z"
        fill={color}
      />
      <Path d="M23.266 7.587v11.667H3.576v.734H24v-12.4h-.734z" fill={color} />
      <Path
        d="M20.79 4.011H0V16.78h20.79V4.011zm-1.504.734l-8.89 6.401-8.89-6.4h17.78zm.77 11.3H.735V5.095l9.661 6.956 9.662-6.956v10.95z"
        fill={color}
      />
      <Path
        d="M9.192 14.04H8.39v.733h.802v-.734zM10.796 14.04h-.802v.733h.802v-.734zM12.4 14.04H11.6v.733h.802v-.734z"
        fill={color}
      />
    </Svg>
  );
};
