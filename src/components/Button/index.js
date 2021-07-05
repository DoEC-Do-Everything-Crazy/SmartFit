/* eslint-disable react-native/no-inline-styles */
import {Text} from '@components';
import Block from '@components/Block';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';
import {useSelector} from 'react-redux';
import styles from './styles';

const Button = ({onPress, title, titleStyle, containerStyle, disabled}) => {
  const config = useSelector(state => state.config.data);

  return (
    <Pressable disabled={disabled} onPress={onPress}>
      <Block
        style={{
          ...styles.container,
          backgroundColor: config.general_active_color,
          opacity: disabled ? 0.7 : 1,
          ...containerStyle,
        }}>
        {disabled ? (
          <UIActivityIndicator size={getSize.s(20)} color="white" />
        ) : (
          <Text
            fontType="semibold"
            color={theme.colors.white}
            style={titleStyle}>
            {title}
          </Text>
        )}
      </Block>
    </Pressable>
  );
};

export default Button;
