import * as yup from 'yup';

import {Block, Button, Header, Text, TextInput} from '@components';

import {Formik} from 'formik';
import React from 'react';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const EnterPhoneNumberScreen = props => {
  const navigation = useNavigation();
  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();

  const validationSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(
        /([+84|0])+([3|5|7|8|9])+([0-9]{8})\b/g,
        'Enter a valid phone number',
      )
      .required('Phone number is Required'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        phoneNumber: '+84',
      }}
      onSubmit={props => {
        console.log(props.phoneNumber);
        navigation.navigate(routes.VFT_PHONE_NUMBER_SCREEN, {
          phone: props.phoneNumber,
        });
      }}>
      {({handleChange, handleBlur, handleSubmit, touched, errors, values}) => (
        <Block flex backgroundColor={theme.colors.backgroundSetting}>
          <Header
            canGoBack
            colorTheme={theme.colors.blue}
            title={t('signInWithPhoneNumber')}
          />
          <Block flex justifyCenter paddingHorizontal={16}>
            <Text center fontType={'bold'} marginBottom={30}>
              {t('enterOTP')}
            </Text>
            <Block marginBottom={10}>
              <TextInput
                onChangeText={handleChange('phoneNumber')}
                value={values.phoneNumber}
                inputStyle={styles.textInput}
                keyboardType="number-pad"
                label="Enter phone number"
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
            title={t('send')}
          />
        </Block>
      )}
    </Formik>
  );
};

export default EnterPhoneNumberScreen;
