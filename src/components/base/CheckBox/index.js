import {icons} from '@assets';
import {Block, Text} from '@components';
import React, {useRef} from 'react';
import {Animated, Image, Pressable, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedView = Animated.createAnimatedComponent(View);

const CheckBox = ({
  title,
  value,
  setValue,
  width = 20,
  containerStyles,
  labelStyles,
  props,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const _onChange = () => {
    setValue(prev => !prev);
    Animated.timing(animatedValue, {
      toValue: value ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const borderColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.smoke, theme.colors.green],
  });

  const scale = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.5, 1],
  });

  const widthIcon = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width],
  });

  return (
    <Block row alignCenter style={containerStyles}>
      <AnimatedPressable
        style={styles.button(borderColor, scale, width)}
        onPress={_onChange}>
        <Image style={styles.icon(width)} source={icons.check_blank} />
        <AnimatedView style={styles.background(widthIcon)} />
      </AnimatedPressable>
      <Text style={labelStyles} fontType="medium">
        {title}
      </Text>
    </Block>
  );
};

export default CheckBox;
