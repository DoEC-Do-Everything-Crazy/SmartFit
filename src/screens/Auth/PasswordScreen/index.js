import {Block, Empty, Text, Button, TextInput} from '@components';

import {Dimensions} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {lotties} from '@assets';
import {routes} from '@navigation/routes';
import {useStyles} from './styles';
import {useTheme} from '@theme';

import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {exitApp} from 'hook';

const {width: SliderWidth} = Dimensions.get('screen');

const PasswordScreen = props => {
  const navigation = useNavigation();

  const {
    theme: {theme: themeStore},
    password: {password},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const [textError, setTextErrord] = useState('');
  const [passInput, setPassInput] = useState('');

  useEffect(() => {
    exitApp();
  }, []);

  const handleNext = useCallback(() => {
    if (passInput === password) {
      navigation.navigate(routes.BOTTOM_TAB);
    } else {
      setTextErrord('You have entered the wrong password');
    }
  }, [navigation, passInput, password]);
  return (
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
            onChangeText={setPassInput}
            value={passInput}
            isSecure
            inputStyle={styles.textInput}
            placeholder="Enter password"
          />
          <Text style={styles.text}>{textError}</Text>
        </Block>
      </Block>
      <Block backgroundColor={theme.colors.backgroundSetting}>
        <Button title="Access" onPress={handleNext} style={styles.button} />
      </Block>
    </Block>
  );
};
export default PasswordScreen;
