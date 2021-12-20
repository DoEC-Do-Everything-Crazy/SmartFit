import {Block, Button, Empty, Header, Text, TextInput} from '@components';
import {Dimensions, KeyboardAvoidingView, Platform} from 'react-native';
import React, {useCallback, useState} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {lotties} from '@assets';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const {width: SliderWidth} = Dimensions.get('screen');
const verticalOffset = Platform.OS === 'ios' ? 'padding' : 'height';
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
      navigation.replace(routes.CHANGE_PASSWORD);
    } else {
      setTextErrord(t('errPassword'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passInput, password]);

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
            <Header canGoBack title={t('enterPinCode')} />

            <Block flex />
            <Block flex>
              <Empty lottie={lotties.password} />
            </Block>
            <Block flex>
              <Text style={styles.renderTitle}>{t('enterCurrentCode')}</Text>
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
export default ChangePinCode;
