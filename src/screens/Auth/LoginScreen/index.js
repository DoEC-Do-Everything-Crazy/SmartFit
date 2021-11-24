import * as yup from 'yup';

/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Button, Header, Text, TextInput} from '@components';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React, {useEffect, useState} from 'react';
import {setToken, setUser} from 'reduxs/reducers';
import {useDispatch, useSelector} from 'react-redux';

import {Formik} from 'formik';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {authApi} from 'api/authApi';
import {routes} from '@navigation/routes';
import setAuthToken from 'utils/setAuthToken';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';
import {userApi} from 'api/userApi';
import {width} from 'utils/responsive';

const LoginScreen = ({navigation, props}) => {
  const {
    theme: {theme: themeStore},
    user: {user},
  } = useSelector(state => state.root);
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      androidClientId:
        '927927486039-0m1dpqbd9cbd94rst8p1d2b7ldo48lbo.apps.googleusercontent.com',
      iosClientId:
        '927927486039-06hpueocjokal608b7lp47uhl3gdf425.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
      const token = await GoogleSignin.getTokens();
      if (token.idToken) {
        setAuthToken(token.idToken);
        let resUser = await userApi.getUser();

        dispatch(setUser(resUser));
        dispatch(setToken(token.idToken));
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.error('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.error('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.error('Play Services Not Available or Outdated');
      } else {
        console.error(error.message);
      }
    }
  };

  const validationSchema = yup.object().shape({
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
  });

  const handleOnSubmit = async values => {
    setIsProcessing(true);

    let userCredentials = {
      email: values.email,
      password: values.password,
    };

    try {
      const resData = await authApi.login(userCredentials);
      setAuthToken(resData.token);
      dispatch(setToken(resData.token));
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
        email: '',
        password: '',
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
        <Block flex backgroundColor={theme.colors.backgroundSetting}>
          <Header canGoBack colorTheme={theme.colors.blue} title={t('login')} />
          <ScrollView>
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
              <Text center fontType={'bold'} marginBottom={30}>
                {t('signInWithYourEmail')}
              </Text>
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
              <Block marginBottom={10}>
                <Button
                  disabled={!isValid}
                  // disabled={isValid ? isSubmitting : false}
                  onPress={handleSubmit}
                  title={t('login')}
                />
              </Block>
              <Block>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(routes.REGISTER_SCREEN);
                  }}>
                  <Text center marginBottom={10}>
                    {t('createAccount')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(routes.SEND_EMAIL_SCREEN);
                  }}>
                  <Text center marginBottom={30}>
                    Quên mật khẩu
                  </Text>
                </TouchableOpacity>
              </Block>
            </Block>
            <Block width={width} marginBottom={50}>
              <Block row alignCenter justifyCenter margin={16}>
                <Block
                  width={150}
                  borderWidth={0.7}
                  borderColor={theme.colors.black}
                />
                <Text
                  size={18}
                  color={theme.colors.black}
                  marginHorizontal={16}
                  fontType="bold">
                  {t('or')}
                </Text>
                <Block
                  borderWidth={0.7}
                  borderColor={theme.colors.black}
                  width={150}
                />
              </Block>
              <Block row alignCenter justifyCenter>
                <GoogleSigninButton
                  style={styles.googleSigninButton}
                  size={GoogleSigninButton.Size.Wide}
                  color={GoogleSigninButton.Color.Dark}
                  onPress={signIn}
                />
              </Block>
            </Block>
          </ScrollView>
        </Block>
      )}
    </Formik>
  );
};

export default LoginScreen;
