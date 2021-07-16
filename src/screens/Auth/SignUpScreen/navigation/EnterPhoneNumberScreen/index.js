import {Block, Button, Header, Text, TextInput} from '@components';
import {theme} from '@theme';
import React, {useState} from 'react';
import styles from './style';

import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const EnterPhoneNumberScreen = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  return (
    <Block flex paddingHorizontal={16} backgroundColor={theme.colors.white}>
      <Header canGoBack title="Sign in with phone number" />
      <Block flex justifyCenter>
        <Text center marginBottom={30}>
          Enter your phone number to receive OTP
        </Text>
        <Block marginBottom={10}>
          <TextInput
            onChangeText={text => setPhone(text)}
            inputStyle={styles.textInput}
            keyboardType="numeric"
            placeholder="0344 108 493"
          />
        </Block>
        <Button
          onPress={() => {
            navigation.navigate(routes.VFTPHONENUMBERSCREEN, {phone});
          }}
          title="Send"
        />
      </Block>
    </Block>
  );
};

export default EnterPhoneNumberScreen;
