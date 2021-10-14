import React from 'react';
import {getSize} from '@utils/responsive';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import Svg, {Path} from 'react-native-svg';

export const ArrowUp = props => {
  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);
  const {width, height} = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 17.774 9.637"
      {...props}
      style={{marginRight: getSize.m(3)}}>
      <Path
        d="M1.061 8.576L8.887.75l7.826 7.826"
        fill="none"
        stroke={theme.colors.black}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Svg>
  );
};
