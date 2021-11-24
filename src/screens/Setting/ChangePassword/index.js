import {Block, Button, Header, Text, TextInput} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {width} from '@utils/responsive';
import {Formik} from 'formik';
import React from 'react';
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {changePassword} from 'reduxs/reducers';
import {useTranslation} from 'react-i18next';
import {KeyboardAvoidingView, Platform} from 'react-native';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 'padding' : 'height';
const ChangePassword = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const validationSchema = yup.object().shape({
    password: yup.string().required(t('errorPasswordRequired')),
    newPassWord: yup
      .string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .required('Password is Required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
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
      onSubmit={subProps => {
        navigation.navigate(routes.BOTTOM_TAB);
        dispatch(changePassword(subProps.confirmPassword));
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
        <KeyboardAvoidingView
          style={styles.sendControlContainerOuter}
          behavior={keyboardVerticalOffset}
          keyboardVerticalOffset={-5}>
          <Block flex>
            <Header
              canGoBack
              title={t('changePassword')}
              colorTheme={theme.colors.blue}
            />
            <Block
              justifyCenter
              paddingHorizontal={16}
              backgroundColor={theme.colors.backgroundSetting}>
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
                value={values.password}
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
      )}
    </Formik>
  );
};

export default ChangePassword;
