import {Block, Header, Button} from '@components';
import React, {useState, useRef, useEffect} from 'react';
import {Text, TextInput, StyleSheet, Dimensions} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';
import {theme} from '@theme';

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
      </Block>
      <Block flexDirection="row" justifyContent="center">
        <Text
          style={{
            fontFamily: 'roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
            marginTop: 60,
          }}>
          Didn’t receive code?
        </Text>
        <Text style={styles.textRequestAgain}>Request again</Text>
      </Block>
      <Block paddingHorizontal={16}>
        <Button
          onPress={() => {
            navigation.navigate(routes.UPDATE_PROFILE, {phone});
          }}
          title="Verify and Create Account"
          height={45}
          marginLeft={10}
        />
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  textRequestAgain: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 60,
    marginLeft: 5,
    color: 'blue',
  },
  text: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 75,
  },
  textInput: {
    backgroundColor: '#F5F4F2',
    fontWeight: '600',
    justifyContent: 'center',
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
    padding: 10,
    fontSize: 20,
    height: 55,
    width: '12.5%',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
});

export default VFTPhoneNumberScreen;
