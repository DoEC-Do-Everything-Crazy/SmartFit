/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Empty, Text, Button, TextInput} from '@components';

import {Dimensions, KeyboardAvoidingView, Platform} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {lotties} from '@assets';
import {routes} from '@navigation/routes';
import {useStyles} from './styles';
import {useTheme} from '@theme';

import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {exitApp} from 'hook';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';

const verticalOffset = Platform.OS === 'ios' ? 'padding' : 'height';
const {width: SliderWidth} = Dimensions.get('screen');

const PasswordScreen = props => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const {
    theme: {theme: themeStore},
    password: {password},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const [textError, setTextErrord] = useState('');
  const [passInput, setPassInput] = useState('');

  useEffect(() => {
    exitApp();
  }, []);

  const handleNext = useCallback(() => {
    if (passInput === password) {
      navigation.navigate(routes.BOTTOM_TAB);
    } else {
      setTextErrord(t('errPassword'));
    }
  }, [navigation, passInput, password]);
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={styles.sendControlContainerOuter}>
      <KeyboardAvoidingView
        style={styles.sendControlContainerOuter}
        behavior={verticalOffset}
        keyboardVerticalOffset={-5}>
        <Block style={styles.root}>
          <Block style={styles.renderRoot}>
            <Block flex />
            <Block flex>
              <Empty lottie={lotties.password} />
            </Block>
            <Block flex>
              <Text style={styles.renderTitle}>{t('enterPassword')}</Text>
              <Text style={styles.renderText}>{t('pleaseEnter')}</Text>
            </Block>
            <Block
              flex
              marginBottom={10}
              width={SliderWidth}
              paddingHorizontal={16}>
              <TextInput
                onChangeText={setPassInput}
                value={passInput}
                isSecure
                inputStyle={styles.textInput}
                label={t('enterPassword')}
              />
              <Text style={styles.text}>{textError}</Text>
            </Block>
          </Block>
          <Block backgroundColor={theme.colors.backgroundSetting}>
            <Button
              title={t('confirm')}
              onPress={handleNext}
              style={styles.button}
            />
          </Block>
        </Block>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default PasswordScreen;
