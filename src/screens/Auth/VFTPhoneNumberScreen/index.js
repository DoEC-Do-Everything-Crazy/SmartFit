import {Block, Button, Header, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React, {useEffect, useRef, useState} from 'react';
import {TextInput} from 'react-native';
import styles from './style';

const VFTPhoneNumberScreen = ({route}) => {
  const navigation = useNavigation();
  const {phone} = route.params;
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
    if (
      (number1 && number2 && number3 && number4 && number5 && number6) !== ''
    ) {
      alert('OK');
    }
  });

  return (
    <Block flex backgroundColor="#FFF">
      <Header
        canGoBack
        title="Sign in with phone number"
        colorTheme={theme.colors.blue}
      />
      <Block flex marginTop={100}>
        <Block>
          <Text
            size={18}
            marginBottom={75}
            fontType="bold"
            style={{textAlign: 'center'}}>
            Code is send to {phone}
          </Text>
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
              size={18}
              marginTop={60}
              fontType="bold"
              style={{
                textAlign: 'center',
              }}>
              Didn’t receive code?
            </Text>
            <Text style={styles.textRequestAgain}>Request again</Text>
          </Block>
        </Block>
      </Block>
      <Button
        onPress={() => {
          navigation.navigate(routes.UPDATE_PROFILE_SCREEN, {phone});
        }}
        title="Verify and Create Account"
        height={45}
        marginLeft={10}
        containerStyle={{justifyContent: 'flex-end'}}
      />
    </Block>
  );
};

export default VFTPhoneNumberScreen;
