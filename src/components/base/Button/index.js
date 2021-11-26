/* eslint-disable react-native/no-inline-styles */
import {Text, Block} from '@components';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import LinearGradient from 'react-native-linear-gradient';
const Button = ({
  onPress,
  title,
  titleStyle,
  containerStyle,
  disabled,
  leftIcon,
  rightIcon,
  variant,
  props,
}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  return (
    <Pressable marginBottom={10} disabled={disabled} onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={
          disabled
            ? [theme.colors.disabled, theme.colors.disabled]
            : themeStore === 'dark'
            ? ['#70A2FF', '#54F0D1']
            : [theme.colors.blue, theme.colors.blue]
        }
        style={{
          ...styles.container,
          opacity: disabled ? 0.7 : 1,
          ...containerStyle,
        }}>
        <Block flex row alignCenter justifyCenter space="between">
          {leftIcon && (
            <Image
              resizeMode="contain"
              source={leftIcon}
              style={styles.leftIcon}
            />
          )}
          <Text
            size={17}
            flex
            center
            fontType="bold"
            color={theme.colors.white}
            style={titleStyle}>
            {title}
          </Text>
          {rightIcon && <Image source={rightIcon} style={styles.rightIcon} />}
        </Block>
      </LinearGradient>
    </Pressable>
  );
};

export default Button;
