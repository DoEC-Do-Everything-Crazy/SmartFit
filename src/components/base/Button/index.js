/* eslint-disable react-native/no-inline-styles */
import {Text, Block} from '@components';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const Button = ({
  onPress,
  title,
  titleStyle,
  containerStyle,
  disabled,
  leftIcon,
  rightIcon,
  props,
}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  return (
    <Pressable disabled={disabled} onPress={onPress}>
      <Block
        style={{
          ...styles.container,
          backgroundColor: theme.colors.blue,
          opacity: disabled ? 0.7 : 1,
          ...containerStyle,
        }}>
        {disabled ? (
          <UIActivityIndicator size={getSize.s(20)} color="white" />
        ) : (
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
        )}
      </Block>
    </Pressable>
  );
};

export default Button;
