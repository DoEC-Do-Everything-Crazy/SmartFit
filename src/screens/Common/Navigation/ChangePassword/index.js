import {Block, Button, Header, Text, TextInput} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import {Formik} from 'formik';
import React from 'react';
import * as yup from 'yup';
import styles from './styles';

const ChangePassword = () => {
  const navigation = useNavigation();
  const validationSchema = yup.object().shape({
    password: yup.string().required('Password is Required'),
    confirmPassword: yup
      .string()
      .required('Password confim is Required')
      .oneOf([yup.ref('password')], 'Confirm Password does not match'),
  });
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        password: '',
        confirmPassword: '',
      }}
      onSubmit={props => {
        navigation.navigate(routes.BOTTOM_TAB, {
          phone: props.passWord,
        });
      }}>
      {({handleChange, handleBlur, handleSubmit, touched, errors, values}) => (
        <Block flex>
          <Header
            canGoBack
            title="Change Password"
            colorTheme={theme.colors.blue}
          />
          <Block flex justifyCenter paddingHorizontal={16}>
            <Text
              size={18}
              center
              fontType="bold"
              color={theme.colors.lightText}>
              Enter new password
            </Text>
            <TextInput
              inputStyle={{paddingHorizontal: 16}}
              onChangeText={handleChange('password')}
              value={values.password}
              containerInputStyle={{width: width - 32, marginTop: 16}}
              placeholder="Enter new password"
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
              placeholder="Enter confim confirmPassword"
              onBlur={handleBlur('confirmPassword')}
              isSecure
            />
            <Block marginTop={8} marginBottom={24}>
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={styles.text}>{errors.confirmPassword}</Text>
              )}
            </Block>
          </Block>
          <Button
            containerStyle={{justifyContent: 'flex-end'}}
            onPress={handleSubmit}
            title="Change password"
          />
        </Block>
      )}
    </Formik>
  );
};

export default ChangePassword;
