import {Block, Button, Header} from '@components';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React, {useEffect, useRef, useState} from 'react';
import {Text, TextInput} from 'react-native';
import styles from './styles';
import {routes} from '@navigation/routes';

const ChangePinCode = () => {
  const navigation = useNavigation();
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
      // Something cái gì đó
    }
  });

  const onPress = () => {
    navigation.navigate(routes.CHANGE_PASSWORD);
  };

  return (
    <Block flex backgroundColor="#FFF">
      <Header
        canGoBack
        title="Change Pin Code"
        colorTheme={theme.colors.blue}
      />
      <Block marginTop={100}>
        <Text
          style={{
            fontFamily: 'roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
            marginBottom: 75,
          }}>
          Enter current Pin Code
        </Text>

        <Block row flex justifyContent="space-evenly">
          <TextInput
            ref={inputRef1}
            maxLength={1}
            returnKeyType="go"
            secureTextEntry
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
            returnKeyType="go"
            secureTextEntry
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
            returnKeyType="go"
            secureTextEntry
            value={number3}
            onChangeText={text => {
              setNumber3(text);
            }}
            style={styles.textInput}
          />

          <TextInput
            ref={inputRef4}
            maxLength={1}
            returnKeyType="go"
            secureTextEntry
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
            returnKeyType="go"
            secureTextEntry
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
            returnKeyType="go"
            secureTextEntry
            keyboardType="number-pad"
            value={number6}
            onChangeText={text => {
              setNumber6(text);
            }}
            style={styles.textInput}
          />
        </Block>
      </Block>
      <Block position="absolute" bottom={0} width="100%">
        <Button title="Change" height={45} marginLeft={10} onPress={onPress} />
      </Block>
    </Block>
  );
};

export default ChangePinCode;
