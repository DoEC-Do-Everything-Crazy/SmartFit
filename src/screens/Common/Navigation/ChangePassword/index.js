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

const ChangePassword = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const validationSchema = yup.object().shape({
    password: yup.string().required('Password is Required'),
    confirmPassword: yup
      .string()
      .min(6, () => 'New Password must be at least 6 characters')
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
        <Block flex>
          <Header
            canGoBack
            title="Change Password"
            colorTheme={theme.colors.blue}
          />
          <Block
            flex
            justifyCenter
            paddingHorizontal={16}
            backgroundColor={theme.colors.backgroundSetting}>
            <Text size={18} center fontType="bold" color={theme.colors.text}>
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
          <Block backgroundColor={theme.colors.backgroundSetting}>
            <Button
              disabled={dirty && isValid ? false : true}
              containerStyle={{justifyContent: 'flex-end'}}
              onPress={handleSubmit}
              title="Change password"
            />
          </Block>
        </Block>
      )}
    </Formik>
  );
};

export default ChangePassword;
