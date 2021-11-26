import * as yup from 'yup';

/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Button, Header, Text, TextInput} from '@components';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {Formik} from 'formik';
import {authApi} from 'api/authApi';
import setAuthToken from 'utils/setAuthToken';
import {setUser} from 'reduxs/reducers';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';

const verticalOffset = Platform.OS === 'ios' ? 'padding' : 'height';
const RegisterScreen = ({navigation, props}) => {
  const {
    theme: {theme: themeStore},
    user: {user},
  } = useSelector(state => state.root);
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const [isProcessing, setIsProcessing] = useState(false);

  const validationSchema = yup.object().shape({
    fullName: yup.string().required('Full name is Required'),
    email: yup
      .string()
      .matches(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Enter a valid email',
      )
      .required('Email is Required'),
    password: yup
      .string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .required('Password is Required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .required('Password is Required'),
  });

  const handleOnSubmit = async values => {
    setIsProcessing(true);

    const userCredentials = {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    try {
      const resData = await authApi.register(userCredentials);
      setAuthToken(resData.token);
      dispatch(setUser(resData.user));
    } catch (error) {
      console.error(error);
    }

    setIsProcessing(false);
  };

  useEffect(() => {
    if (user) {
      navigation.goBack();
    }
  }, [user]);

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={handleOnSubmit}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        errors,
        values,
        isValid,
      }) => (
        <SafeAreaView
          edges={['top', 'left', 'right']}
          style={styles.sendControlContainerOuter}>
          <KeyboardAvoidingView
            style={styles.sendControlContainerOuter}
            behavior={verticalOffset}
            keyboardVerticalOffset={-20}>
            <Block flex backgroundColor={theme.colors.backgroundSetting}>
              <Header
                canGoBack
                colorTheme={theme.colors.blue}
                title={t('register')}
              />
              <Block flex>
                {isProcessing && (
                  <Block
                    backgroundColor={theme.colors.backgroundSetting + '95'}
                    flex
                    justifyCenter
                    alignCenter
                    style={styles.processing}>
                    <Block style={{padding: 50}}>
                      <Text style={{color: 'black'}}>Processing...</Text>
                    </Block>
                  </Block>
                )}
                <Block flex justifyCenter>
                  <Block marginBottom={10} paddingHorizontal={16}>
                    <TextInput
                      onChangeText={handleChange('fullName')}
                      value={values.fullName}
                      inputStyle={styles.inputStyle}
                      keyboardType="default"
                      label={t('enterYourName')}
                      onBlur={handleBlur('fullName')}
                    />
                    {errors.fullName && touched.fullName && (
                      <Text style={styles.text}>{errors.fullName}</Text>
                    )}
                  </Block>
                  <Block marginBottom={10} paddingHorizontal={16}>
                    <TextInput
                      onChangeText={handleChange('email')}
                      value={values.email}
                      inputStyle={styles.inputStyle}
                      keyboardType="email-address"
                      label={t('enterYourEmail')}
                      onBlur={handleBlur('email')}
                    />
                    {errors.email && touched.email && (
                      <Text style={styles.text}>{errors.email}</Text>
                    )}
                  </Block>
                  <Block marginBottom={10} paddingHorizontal={16}>
                    <TextInput
                      onChangeText={handleChange('password')}
                      value={values.password}
                      inputStyle={styles.inputStyle}
                      keyboardType="default"
                      label={t('enterYourPassword')}
                      onBlur={handleBlur('password')}
                      isSecure
                    />
                    {errors.password && touched.password && (
                      <Text style={styles.text}>{errors.password}</Text>
                    )}
                  </Block>
                  <Block marginBottom={10} paddingHorizontal={16}>
                    <TextInput
                      onChangeText={handleChange('confirmPassword')}
                      value={values.confirmPassword}
                      inputStyle={styles.inputStyle}
                      keyboardType="default"
                      label={t('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      isSecure
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <Text style={styles.text}>{errors.confirmPassword}</Text>
                    )}
                  </Block>
                </Block>
              </Block>
              <Block marginBottom={10}>
                <Button
                  disabled={!isValid}
                  // disabled={isValid ? isSubmitting : false}
                  onPress={handleSubmit}
                  title={t('register')}
                />
              </Block>
            </Block>
          </KeyboardAvoidingView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default RegisterScreen;
