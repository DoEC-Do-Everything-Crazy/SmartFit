import {Block, Empty, Text, Button, TextInput} from '@components';

import {Dimensions} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import * as yup from 'yup';
import {lotties} from '@assets';
import {Formik} from 'formik';
import {routes} from '@navigation/routes';
import styles from './styles';

import {useNavigation} from '@react-navigation/core';

const {width: SliderWidth} = Dimensions.get('screen');

const PasswordScreen = () => {
  const navigation = useNavigation();
  const [localPassword] = useState();
  const handleNext = useCallback(() => {
    navigation.navigate(routes.BOTTOM_TAB);
  }, [navigation]);

  const validationSchema = yup.object().shape({
    password: yup
      .string()
      .matches(localPassword, 'You have entered the wrong password')
      .required('Password is Required'),
  });
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        password: '',
      }}
      onSubmit={props => {
        console.log(props.phoneNumber);
        navigation.navigate(routes.VFT_PHONE_NUMBER_SCREEN, {
          phone: props.phoneNumber,
        });
      }}>
      {({handleChange, handleBlur, handleSubmit, touched, errors, values}) => (
        <Block style={styles.root}>
          <Block style={styles.renderRoot}>
            <Block flex />
            <Block flex>
              <Empty lottie={lotties.password} />
            </Block>
            <Block flex>
              <Text style={styles.renderTitle}>Enter password</Text>
              <Text style={styles.renderText}>
                Please enter your password to access the application
              </Text>
            </Block>
            <Block
              flex
              marginBottom={10}
              width={SliderWidth}
              paddingHorizontal={16}>
              <TextInput
                onChangeText={handleChange('password')}
                value={values.password}
                inputStyle={styles.textInput}
                placeholder="Enter password"
                onBlur={handleBlur('password')}
              />
              {errors.password && touched.password && (
                <Text style={styles.text}>{errors.password}</Text>
              )}
            </Block>
          </Block>

          <Button title="Access" onPress={handleNext} style={styles.button} />
        </Block>
      )}
    </Formik>
  );
};
export default PasswordScreen;
