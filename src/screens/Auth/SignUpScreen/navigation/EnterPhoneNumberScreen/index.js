import {Block, Button, Header, Text} from '@components';
import {theme} from '@theme';
import React, {useState} from 'react';
import {Formik} from 'formik';
import {TextInput} from 'react-native';
import * as yup from 'yup';
import styles from './style';

import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const EnterPhoneNumberScreen = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');

  const validationSchema = yup.object().shape({
    phoneNumber: yup.string().required('Phone number is Required'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        phoneNumber: '',
      }}
      onSubmit={() => {
        console.log('aaa');
        navigation.navigate(routes.VFTPHONENUMBERSCREEN, {phone});
      }}>
      {({handleChange, handleBlur, handleSubmit, touched, errors, values}) => (
        <Block flex paddingHorizontal={16} backgroundColor={theme.colors.white}>
          <Header canGoBack title="Sign in with phone number" />
          <Block flex justifyCenter>
            <Text center marginBottom={30}>
              Enter your phone number to receive OTP
            </Text>
            <Block marginBottom={10}>
              <TextInput
                onChangeText={handleChange('phoneNumber')}
                value={values.phoneNumber}
                inputStyle={styles.textInput}
                keyboardType="numeric"
                placeholder="0344 108 493"
                onBlur={handleBlur('phoneNumber')}
                onEndEditing={() => setPhone(values.phoneNumber)}
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <Text style={styles.text}>{errors.phoneNumber}</Text>
              )}
            </Block>
            <Button onPress={handleSubmit} title="Send" />
          </Block>
        </Block>
      )}
    </Formik>
  );
};

export default EnterPhoneNumberScreen;
