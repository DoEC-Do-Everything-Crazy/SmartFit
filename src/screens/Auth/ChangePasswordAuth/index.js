/* eslint-disable react-hooks/exhaustive-deps */
import * as yup from 'yup';

import {Block, Button, Error, Header, Text, TextInput} from '@components';
import {KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';
import React, {useCallback, useState} from 'react';

import {Formik} from 'formik';
import setAuthToken from 'utils/setAuthToken';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';
import {userApi} from 'api/userApi';

const verticalOffset = Platform.OS === 'ios' ? 'padding' : 'height';
const ChangePasswordAuth = props => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const {
    theme: {theme: themeStore},
    user: {token},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const [errorMessage, setErrorMessage] = useState('');

  const validationSchema = yup.object().shape({
    oldPassword: yup
      .string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .required('Password is Required'),
    newPassWord: yup
      .string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .required('Password is Required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassWord'), null], 'Passwords must match')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .required('Password is Required'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        oldPassword: '',
        newPassWord: '',
        confirmPassword: '',
      }}
      onSubmit={async () => {
        try {
          setAuthToken(token);
          await userApi.changePassword({
            oldPassword: props.oldPassword,
            newPassword: props.newPassWord,
          });

          navigation.goBack();
        } catch (error) {
          console.error(error);
          setErrorMessage(error.message);
        }
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        errors,
        values,
        isValid,
        dirty,
      }) => (
        <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
          <KeyboardAvoidingView
            style={styles.sendControlContainerOuter}
            behavior={verticalOffset}
            keyboardVerticalOffset={-5}>
            <Block flex>
              <Header
                canGoBack
                title={t('changePassword')}
                colorTheme={theme.colors.blue}
              />
              <Block
                marginTop={20}
                justifyCenter
                paddingHorizontal={16}
                backgroundColor={theme.colors.backgroundSetting}>
                <Error errorMessage={errorMessage} setError={setErrorMessage} />
                <TextInput
                  inputStyle={{paddingHorizontal: 16}}
                  onChangeText={handleChange('oldPassword')}
                  value={values.oldPassword}
                  containerInputStyle={{marginTop: 16}}
                  label={t('enterOldPassword')}
                  onBlur={handleBlur('oldPassword')}
                  isSecure
                />
                <Block marginTop={8} marginBottom={24}>
                  {errors.oldPassword && touched.oldPassword && (
                    <Text style={styles.text}>{errors.oldPassword}</Text>
                  )}
                </Block>
                <TextInput
                  inputStyle={{paddingHorizontal: 16}}
                  onChangeText={handleChange('newPassWord')}
                  value={values.newPassWord}
                  label={t('enterNewPassword')}
                  onBlur={handleBlur('newPassWord')}
                  isSecure
                />
                <Block marginTop={8} marginBottom={24}>
                  {errors.newPassWord && touched.newPassWord && (
                    <Text style={styles.text}>{errors.newPassWord}</Text>
                  )}
                </Block>
                <TextInput
                  inputStyle={{paddingHorizontal: 16}}
                  onChangeText={handleChange('confirmPassword')}
                  value={values.confirmPassword}
                  label={t('enterConfimPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  isSecure
                />
                <Block marginTop={8} marginBottom={24}>
                  {errors.confirmPassword && touched.confirmPassword && (
                    <Text style={styles.text}>{errors.confirmPassword}</Text>
                  )}
                </Block>
              </Block>
              <Block backgroundColor={theme.colors.backgroundSetting}>
                <Button
                  disabled={dirty && isValid ? false : true}
                  containerStyle={{justifyContent: 'flex-end'}}
                  onPress={handleSubmit}
                  title={t('changePassword')}
                />
              </Block>
            </Block>
          </KeyboardAvoidingView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default ChangePasswordAuth;
