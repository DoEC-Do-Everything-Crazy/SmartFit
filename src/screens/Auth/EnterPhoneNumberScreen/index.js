import {Block, Button, Header, Text, TextInput} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import styles from './style';

import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const EnterPhoneNumberScreen = () => {
  const navigation = useNavigation();

  const validationSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Enter a valid phone number')
      .required('Phone number is Required'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        phoneNumber: '',
      }}
      onSubmit={props => {
        console.log(props.phoneNumber);
        navigation.navigate(routes.VFT_PHONE_NUMBER_SCREEN, {
          phone: props.phoneNumber,
        });
      }}>
      {({handleChange, handleBlur, handleSubmit, touched, errors, values}) => (
        <Block flex backgroundColor={theme.colors.background}>
          <Header
            canGoBack
            colorTheme={theme.colors.blue}
            title="Sign in with phone number"
          />
          <Block flex justifyCenter paddingHorizontal={16}>
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
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <Text style={styles.text}>{errors.phoneNumber}</Text>
              )}
            </Block>
          </Block>
          <Button
            containerStyle={{justifyContent: 'flex-end'}}
            onPress={handleSubmit}
            title="Send"
          />
        </Block>
      )}
    </Formik>
  );
};

export default EnterPhoneNumberScreen;
