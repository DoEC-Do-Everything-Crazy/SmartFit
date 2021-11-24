import React, {useMemo, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import Block from '../Block';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Text from '../Text';
import {getSize} from '@utils/responsive';
import {isEmpty} from 'lodash';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const InputText = ({...props}) => {
  const {
    ref,
    onBlur,
    onFocus,
    label,
    labelStyle,
    containerInputStyle,
    fontType,
    color,
    size,
    children,
    isSecure,
    rightIcon,
    leftIcon,
    maxHeight,
    maxLength,
    inputStyle,
    errorText,
    isError,
    disabled,
    errorContainerStyle,
    isFocus,
    isBlur,
    ...inputProps
  } = props;
  const [secureEye, setSecureEye] = useState(true);
  const [isInput, setInput] = useState(true);

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const textStyle = [
    styles.resetStyles,
    fontType && {
      fontWeight: theme.fonts.fontWeight[fontType],
    },
    !fontType && {fontWeight: theme.fonts.fontWeight.regular},
    color && {color: theme.colors[color]},
    color && !theme.colors[color] && {color: color},
    !color && {color: theme.colors.black},
    styles.defaultStyles,
    (rightIcon || isSecure) && {paddingRight: getSize.m(50)},
    props.multiline && maxHeight ? {maxHeight} : {height: getSize.m(21) * 2},
    leftIcon && {paddingLeft: getSize.m(38)},
    {fontSize: getSize.m(size ? size : 14)},
    {...StyleSheet.flatten(inputProps.style)},
  ];

  const borderColor = useMemo(() => {
    if (isInput) {
      return theme.colors.inputText;
    }
    return theme.colors.iconInf;
  }, [isInput, theme.colors.iconInf, theme.colors.inputText]);

  const _renderSecureIcon = () => {
    return (
      <TouchableOpacity
        style={styles.rightIcon}
        hitSlop={{left: 5, right: 5, bottom: 5, top: 5}}
        onPress={() => setSecureEye(!secureEye)}>
        <FontAwesomeIcon
          name={secureEye ? 'eye' : 'eye-slash'}
          color={theme.colors.black}
          size={getSize.m(12)}
        />
      </TouchableOpacity>
    );
  };

  const _renderLabel = () => (
    <Text marginLeft={10} size={12} marginTop={5} style={labelStyle}>
      {label}
    </Text>
  );

  const _renderError = () => (
    <Block row alignCenter paddingVertical={3} style={errorContainerStyle}>
      <Ionicons
        name="ios-warning"
        color={theme.colors.red}
        size={getSize.m(11)}
      />
      <Text marginLeft={6} size={12} color={theme.colors.red}>
        {errorText}
      </Text>
    </Block>
  );

  const _renderInput = () => {
    return (
      <>
        {leftIcon ? (
          <Block paddingLeft={10} paddingTop={20} width={'100%'}>
            <TextInput
              onFocus={() => {
                setInput(false), onFocus;
              }}
              onBlur={() => {
                setInput(true), onBlur;
              }}
              ref={ref}
              autoCorrect={false}
              textAlignVertical={props.multiline ? 'top' : 'center'}
              placeholder={!isEmpty(label) && leftIcon ? props.placeholder : ''}
              placeholderTextColor={theme.colors.placeholder}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              secureTextEntry={secureEye && isSecure}
              maxLength={maxLength}
              style={[styles.inputStyle, textStyle, {color: theme.colors.text}]}
              editable={!disabled}
              {...inputProps}
            />
          </Block>
        ) : (
          <TextInput
            onFocus={() => {
              setInput(false), onFocus;
            }}
            onBlur={() => {
              setInput(true), onBlur;
            }}
            ref={ref}
            autoCorrect={false}
            textAlignVertical={props.multiline ? 'top' : 'center'}
            placeholder={!isEmpty(label) && leftIcon ? props.placeholder : ''}
            placeholderTextColor={theme.colors.placeholder}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            secureTextEntry={secureEye && isSecure}
            maxLength={maxLength}
            style={[styles.inputStyle, textStyle, {color: theme.colors.text}]}
            editable={!disabled}
            {...inputProps}
          />
        )}
      </>
    );
  };

  return (
    <Block
      flexShrink
      style={[
        containerInputStyle,
        styles.containerInputStyle,
        {
          borderRadius: 8,
          borderColor: borderColor,
          borderWidth: 1,
        },
      ]}>
      {!isEmpty(label) && _renderLabel()}
      <Block
        style={[
          styles.inputContainer,
          {
            borderColor: isError ? theme.colors.red : theme.colors.lightGray,
          },
          StyleSheet.flatten(inputStyle),
        ]}>
        {leftIcon && (
          <Block
            alignCenter
            justifyCenter
            style={{
              ...styles.leftIcon,
            }}>
            {children}
          </Block>
        )}
        {_renderInput()}
        {isSecure ? _renderSecureIcon() : rightIcon && rightIcon()}
      </Block>
      {isError && Boolean(errorText) && _renderError()}
    </Block>
  );
};

export default InputText;
