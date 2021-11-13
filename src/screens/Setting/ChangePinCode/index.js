import {Block, Empty, Text, Button, TextInput} from '@components';
import {Dimensions, KeyboardAvoidingView, Platform} from 'react-native';
import React, {useCallback, useState} from 'react';
import {lotties} from '@assets';
import {routes} from '@navigation/routes';
import {useStyles} from './styles';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const {width: SliderWidth} = Dimensions.get('screen');
const keyboardVerticalOffset = Platform.OS === 'ios' ? 'padding' : 'height';
const ChangePinCode = props => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const {password} = useSelector(state => state.root.password);
  const [textError, setTextErrord] = useState('');
  const [passInput, setPassInput] = useState('');

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const handleNext = useCallback(() => {
    if (passInput === password) {
      navigation.navigate(routes.CHANGE_PASSWORD);
    } else {
      setTextErrord(t('errPassword'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, passInput, password]);

  return (
    <KeyboardAvoidingView
      style={styles.sendControlContainerOuter}
      behavior={keyboardVerticalOffset}
      keyboardVerticalOffset={-5}>
      <Block style={styles.root}>
        <Block style={styles.renderRoot}>
          <Block flex />
          <Block flex>
            <Empty lottie={lotties.password} />
          </Block>
          <Block flex>
            <Text style={styles.renderTitle}>{t('enterCurrentCode')}</Text>
            <Block marginTop={30} width={SliderWidth} paddingHorizontal={16}>
              <TextInput
                onChangeText={setPassInput}
                value={passInput}
                isSecure
                inputStyle={styles.textInput}
                placeholder={t('enterPassword')}
              />
              <Text style={styles.text}>{textError}</Text>
            </Block>
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
  );
};
export default ChangePinCode;
