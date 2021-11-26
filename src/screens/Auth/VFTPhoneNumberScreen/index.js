import {Block, Button, Header, Text} from '@components';
import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';

import {TextInput} from 'react-native';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';
import {userApi} from 'api/userApi';
import {SafeAreaView} from 'react-native-safe-area-context';

const VFTPhoneNumberScreen = ({route, props}) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {email} = route.params;
  const [code, setCode] = useState('');

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [number4, setNumber4] = useState('');
  const [number5, setNumber5] = useState('');
  const [number6, setNumber6] = useState('');

  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef5 = useRef();
  const inputRef6 = useRef();

  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  useEffect(() => {
    if (number1 === '') {
      inputRef1.current.focus();
    } else if (number1 !== '' && number2 === '') {
      inputRef2.current.focus();
    } else if (number1 !== '' && number2 !== '' && number3 === '') {
      inputRef3.current.focus();
    } else if (
      number1 !== '' &&
      number2 !== '' &&
      number3 !== '' &&
      number4 === ''
    ) {
      inputRef4.current.focus();
    } else if (
      number1 !== '' &&
      number2 !== '' &&
      number3 !== '' &&
      number4 !== '' &&
      number5 === ''
    ) {
      inputRef5.current.focus();
    } else if (
      number1 !== '' &&
      number2 !== '' &&
      number3 !== '' &&
      number4 !== '' &&
      number5 !== ''
    ) {
      inputRef6.current.focus();
    }
    setCode(`${number1}${number2}${number3}${number4}${number5}${number6}`);
  }, [number1, number2, number3, number4, number5, number6, code]);

  const confirmCode = async () => {
    try {
      const res = await userApi.checkCode({email: email, code: code});
      if (res.status === 200) {
        navigation.navigate(routes.ENTER_PHONE_NUMBER_SCREEN, {
          email: email,
          code: code,
        });
      }
    } catch (error) {
      console.error('confirm error', error.message);
    }
  };

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={styles.sendControlContainerOuter}>
      <Block flex backgroundColor={theme.colors.backgroundSetting}>
        <Header
          canGoBack
          title={t('checkCode')}
          colorTheme={theme.colors.blue}
        />
        <Block flex justifyCenter>
          <Block>
            <Block paddingHorizontal={16}>
              <Text
                center
                size={18}
                marginBottom={75}
                fontType="bold"
                style={{textAlign: 'center'}}>
                {t('codeIsSendTo')} {email}
              </Text>
            </Block>
            <Block row flex justifyContent="space-evenly">
              <TextInput
                ref={inputRef1}
                maxLength={1}
                keyboardType="number-pad"
                value={number1}
                onChangeText={text => {
                  setNumber1(text);
                }}
                style={styles.textInput}
              />

              <TextInput
                ref={inputRef2}
                maxLength={1}
                keyboardType="number-pad"
                value={number2}
                onChangeText={text => {
                  setNumber2(text);
                }}
                style={styles.textInput}
              />

              <TextInput
                ref={inputRef3}
                maxLength={1}
                keyboardType="number-pad"
                value={number3}
                onChangeText={text => {
                  setNumber3(text);
                }}
                style={styles.textInput}
              />

              <TextInput
                ref={inputRef4}
                maxLength={1}
                keyboardType="number-pad"
                value={number4}
                onChangeText={text => {
                  setNumber4(text);
                }}
                style={styles.textInput}
              />

              <TextInput
                ref={inputRef5}
                maxLength={1}
                keyboardType="number-pad"
                value={number5}
                onChangeText={text => {
                  setNumber5(text);
                }}
                style={styles.textInput}
              />

              <TextInput
                ref={inputRef6}
                maxLength={1}
                keyboardType="number-pad"
                value={number6}
                onChangeText={text => {
                  setNumber6(text);
                }}
                style={styles.textInput}
              />
            </Block>
            <Block row alignCenter justifyCenter>
              <Text
                color={theme.colors.text}
                size={18}
                marginTop={60}
                fontType="bold"
                center>
                {t('receiveCode')}
              </Text>
              <Text center style={styles.textRequestAgain}>
                {t('requestAgain')}
              </Text>
            </Block>
          </Block>
        </Block>
        <Button
          onPress={confirmCode}
          title="Verify"
          height={45}
          marginLeft={10}
          containerStyle={{justifyContent: 'flex-end'}}
        />
      </Block>
    </SafeAreaView>
  );
};

export default VFTPhoneNumberScreen;
