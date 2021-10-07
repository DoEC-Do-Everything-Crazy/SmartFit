import {Block, Empty, Text, Button, TextInput} from '@components';
import {Dimensions} from 'react-native';
import React, {useCallback, useState} from 'react';
import {lotties} from '@assets';
import {routes} from '@navigation/routes';
import {useStyles} from './styles';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';

const {width: SliderWidth} = Dimensions.get('screen');

const ChangePinCode = props => {
  const navigation = useNavigation();

  const {password} = useSelector(state => state.root.password);
  const [textError, setTextErrord] = useState('');
  const [passInput, setPassInput] = useState('');

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);

  const handleNext = useCallback(() => {
    if (passInput === password) {
      navigation.navigate(routes.CHANGE_PASSWORD);
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
          <Text style={styles.renderTitle}>Enter current Pin Code</Text>
          <Block marginTop={30} width={SliderWidth} paddingHorizontal={16}>
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
      </Block>

      <Button title="Access" onPress={handleNext} style={styles.button} />
    </Block>
  );
};
export default ChangePinCode;
