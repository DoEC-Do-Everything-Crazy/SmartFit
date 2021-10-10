import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import {getSize} from '@utils/responsive';

export const ArrowDown = props => {
  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);
  return (
    <Svg
      width={17.773}
      height={9.645}
      viewBox="0 0 17.773 9.645"
      {...props}
      style={{marginRight: getSize.m(3)}}>
      <Path
        d="M1.061 1.061l3.261 3.261 3.587 3.587.978.978 7.826-7.826"
        fill="none"
        stroke={theme.colors.black}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Svg>
  );
};
