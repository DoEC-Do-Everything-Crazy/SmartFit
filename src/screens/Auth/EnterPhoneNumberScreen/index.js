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
import {userApi} from 'api/userApi';

const EnterPhoneNumberScreen = ({props, route}) => {
  const email = route.params?.email;
  const code = route.params?.code;
  const navigation = useNavigation();
  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();

  const validationSchema = yup.object().shape({
    newPassword: yup
      .string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .required('Password is Required'),
    newPasswordAgain: yup
      .string()
      .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .required('Password is Required'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        newPassword: '',
        newPasswordAgain: '',
      }}
      onSubmit={async props => {
        const res = await userApi.resetPassword({
          code: code,
          email: email,
          newPassword: props.newPassword,
        });

        if (res.status === 200) {
          navigation.navigate(routes.LOGIN_SCREEN);
        }
      }}>
      {({handleChange, handleBlur, handleSubmit, touched, errors, values}) => (
        <Block flex backgroundColor={theme.colors.backgroundSetting}>
          <Header
            canGoBack
            colorTheme={theme.colors.blue}
            title={t('reserPass')}
          />
          <Block flex justifyCenter paddingHorizontal={16}>
            <Text center fontType={'bold'} marginBottom={30}>
              {t('EnterNPass')}
            </Text>
            <Block marginBottom={10}>
              <TextInput
                onChangeText={handleChange('newPassword')}
                inputStyle={styles.textInput}
                label={t('enterYourPassword')}
                onBlur={handleBlur('newPassword')}
                isSecure
              />
              {errors.newPassword && touched.newPassword && (
                <Text style={styles.text}>{errors.newPassword}</Text>
              )}
              <Block marginVertical={10} />
              <TextInput
                onChangeText={handleChange('newPasswordAgain')}
                inputStyle={styles.textInput}
                label={t('enterPassAgain')}
                onBlur={handleBlur('newPasswordAgain')}
                isSecure
              />
              {errors.newPasswordAgain && touched.newPasswordAgain && (
                <Text style={styles.text}>{errors.newPasswordAgain}</Text>
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
