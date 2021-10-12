import * as React from 'react';
import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';
export const Course = props => {
  const {color} = props;
  return (
    <Svg
      width={30}
      height={31}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11.675 6.469c1.48 0 2.68-1.348 2.68-3.01 0-1.662-1.2-3.01-2.68-3.01-1.48 0-2.679 1.348-2.679 3.01 0 1.662 1.2 3.01 2.68 3.01z"
        fill={color}
      />
      <Path
        d="M12.55 10.401c.91 1.756 1.774 3.542 2.604 5.348-1.227.704-2.678 1.939-3.418 2.613-.74.674-2.119 4.119-2.828 5.766-.762 1.77 1.69 3.052 2.449 1.29.625-1.451 1.679-4.34 2.292-4.908.613-.567 2.627-2.168 4.163-2.769.075-.03.144-.065.21-.104 1.88 2.68 5.562 3.947 8.703 1.885 1.655-1.087.158-3.766-1.502-2.676-2.3 1.512-4.695-.421-5.78-2.84-1.084-2.42-1.852-4.124-2.73-5.838 1.716-.615 3.285-.053 4.52 1.889 1.003 1.58 3.35.065 2.335-1.534-2.388-3.758-5.95-4.69-9.516-2.312-.148.099-.818.513-.968.614-2.217 1.478-4.277 1.198-5.815-1.223-1.005-1.58-3.352-.065-2.336 1.533 1.963 3.089 4.718 4.264 7.617 3.266z"
        fill={color}
      />
      <Path
        d="M28.785 27.72H4.542l-1.91-12.272h4.811c.671 0 1.215-.61 1.215-1.364 0-.754-.544-1.365-1.215-1.365H1.215C.544 12.72 0 13.33 0 14.084v.186c0 .079.006.157.018.235L2.325 29.32c.102.652.607 1.129 1.197 1.129h25.263c.671 0 1.215-.611 1.215-1.365 0-.753-.544-1.364-1.215-1.364z"
        fill={color}
      />
    </Svg>
  );
};
