import {getSize} from '@utils/responsive';
import {isNumber} from 'lodash';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  handleMargin,
  handlePadding,
  handleRound,
  handleSquare,
} from '../shared';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const Block = ({
  flex,
  flexShrink,
  flexGrow,
  row,
  column,
  shadow,
  backgroundColor,
  space,
  padding,
  margin,
  alignStart,
  alignCenter,
  alignEnd,
  wrap,
  justifyCenter,
  justifyEnd,
  justifyStart,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  paddingVertical,
  paddingHorizontal,
  marginVertical,
  marginHorizontal,
  radius,
  height,
  width,
  square,
  round,
  borderWidth,
  relative,
  absolute,
  top,
  left,
  right,
  bottom,
  borderColor,
  children,
  overflow,
  alignSelf,
  style,
  shadowColor,
  opacity,
  elevation,
  maxWidth,
  maxHeight,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  zIndex,
  ...props
}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const blockStyles = [
    flex && styles.block,
    flexShrink && styles.flexShrink,
    flexGrow && styles.flexGrow,
    !flex && {flex: 0},
    maxWidth && {maxWidth},
    maxHeight && {maxHeight},
    width && {width: width},
    height && {height: height},
    row && styles.row,
    column && styles.column,
    shadow && {
      ...styles.shadow,
      shadowColor: shadowColor ? theme.colors[shadowColor] : theme.colors.black,
      elevation: elevation || 3,
    },
    wrap && {flexWrap: 'wrap'},
    backgroundColor && {
      backgroundColor: theme.colors[backgroundColor] || backgroundColor,
    },
    padding && {...handlePadding(getSize.m(padding))},
    margin && {...handleMargin(getSize.m(margin))},
    alignStart && styles.alignStart,
    alignCenter && styles.alignCenter,
    alignEnd && styles.alignEnd,
    justifyCenter && styles.justifyCenter,
    justifyStart && styles.justifyStart,
    justifyEnd && styles.justifyEnd,
    space && {justifyContent: `space-${space}`},
    paddingTop && {paddingTop: getSize.m(paddingTop)},
    paddingRight && {paddingRight: getSize.m(paddingRight)},
    paddingBottom && {paddingBottom: getSize.m(paddingBottom)},
    paddingLeft && {paddingLeft: getSize.m(paddingLeft)},
    marginBottom && {marginBottom: getSize.m(marginBottom)},
    marginTop && {marginTop: getSize.m(marginTop)},
    marginRight && {marginRight: getSize.m(marginRight)},
    marginLeft && {marginLeft: getSize.m(marginLeft)},
    paddingHorizontal && {paddingHorizontal: getSize.m(paddingHorizontal)},
    paddingVertical && {paddingVertical: getSize.m(paddingVertical)},
    marginHorizontal && {marginHorizontal: getSize.m(marginHorizontal)},
    marginVertical && {marginVertical: getSize.m(marginVertical)},
    radius && {borderRadius: getSize.s(radius)},
    borderWidth && {borderWidth: borderWidth},
    square && {...handleSquare(getSize.s(square))},
    round && {...handleRound(getSize.s(round))},
    isNumber(opacity) && {opacity: opacity},
    borderColor && {
      borderColor:
        theme.colors[borderColor] || theme.colors.border || borderColor,
    },
    relative && {position: 'relative'},
    absolute && {position: 'absolute'},
    isNumber(top) && {top: getSize.v(top)},
    isNumber(left) && {left: getSize.s(left)},
    isNumber(right) && {right: getSize.s(right)},
    isNumber(bottom) && {bottom: getSize.v(bottom)},
    overflow && {overflow},
    alignSelf && {alignSelf},
    borderTopWidth && {borderTopWidth},
    borderRightWidth && {borderRightWidth},
    borderBottomWidth && {borderBottomWidth},
    borderLeftWidth && {borderLeftWidth},
    zIndex && {zIndex},
    {...StyleSheet.flatten(style)},
  ];

  return (
    <View style={blockStyles} {...props}>
      {children}
    </View>
  );
};

export default Block;
