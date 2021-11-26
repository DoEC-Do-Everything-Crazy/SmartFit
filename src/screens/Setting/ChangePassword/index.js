import * as yup from 'yup';

import {Block, Button, Header, Text, TextInput} from '@components';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Formik} from 'formik';
import React from 'react';
import {changePassword} from 'reduxs/reducers';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';
import {width} from '@utils/responsive';

const keyboardBehavior = Platform.OS === 'ios' ? 'padding' : 'height';

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
    confirmPassword: yup
      .string()
      .min(6, () => t('errCharactersLeght'))
      .required(t('errorPasswordRequired'))
      .oneOf([yup.ref('password')], t('errNotMatch')),
  });
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        password: '',
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
          behavior={keyboardBehavior}
          keyboardVerticalOffset={-5}>
          <Block flex>
            <Header
              canGoBack
              title={t('changePassword')}
              colorTheme={theme.colors.blue}
            />
            <Block
              flex
              justifyCenter
              paddingHorizontal={16}
              backgroundColor={theme.colors.backgroundSetting}>
              <Text size={18} center fontType="bold" color={theme.colors.text}>
                {t('enterNewPassword')}
              </Text>
              <TextInput
                inputStyle={{paddingHorizontal: 16}}
                onChangeText={handleChange('password')}
                value={values.password}
                containerInputStyle={{width: width - 32, marginTop: 16}}
                label={t('enterNewPassword')}
                onBlur={handleBlur('password')}
                isSecure
              />
              <Block marginTop={8} marginBottom={24}>
                {errors.password && touched.password && (
                  <Text style={styles.text}>{errors.password}</Text>
                )}
              </Block>
              <TextInput
                inputStyle={{paddingHorizontal: 16}}
                onChangeText={handleChange('confirmPassword')}
                value={values.confirmPassword}
                containerInputStyle={{width: width - 32, marginTop: 16}}
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
