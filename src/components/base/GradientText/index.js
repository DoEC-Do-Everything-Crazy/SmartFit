import React from 'react';

import {useSelector} from 'react-redux';
import {makeStyles} from '@theme';
import {View} from 'react-native';
import Svg, {
  Text,
  Rect,
  RadialGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
const GradientText = ({fontSize, fontWeight, disable, children, props}) => {
  const themeStore = useSelector(state => state.root.theme.theme);
  const styles = useStyles(props, themeStore);

  return (
    <View style={styles.root}>
      <Svg
        key={'gradientText' + Math.random()}
        height="100%"
        width="100%"
        {...props}>
        <RadialGradient
          id="grad"
          cx="90%"
          cy="50%"
          rx="70%"
          ry="50%"
          fx="90%"
          fy="50%"
          gradientUnits="userSpaceOnUse">
          <Stop
            offset="30%"
            stopColor={disable ? '#6A84A0' : '#54F0D1'}
            stopOpacity="1"
          />
          <Stop
            offset="100%"
            stopColor={disable ? '#6A84A0' : '#70A2FF'}
            stopOpacity="2"
          />
        </RadialGradient>
        <ClipPath id="clip">
          <Text
            dx="50%"
            dy="60%"
            fontSize={fontSize}
            fontWeight={fontWeight}
            fontFamily="Arial"
            textAnchor="middle">
            {children}
          </Text>
        </ClipPath>

        <Rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#grad)"
          clipPath="url(#clip)"
        />
      </Svg>
    </View>
  );
};

GradientText.defaultProps = {
  disable: false,
  fontSize: 22,
  fontWeight: '400',
  children: 'Fill your text',
};
const useStyles = makeStyles()(({}) => ({
  root: {
    flexGrow: 2,
    height: 35,
    width: '90%',
    flexDirection: 'row',
  },
}));
export default GradientText;
