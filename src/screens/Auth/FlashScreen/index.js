import {Block} from '@components';
import {theme} from '@theme';
import React, {useEffect} from 'react';
import {icons} from '@assets';
import styles from './styles';
import {Image, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const FlashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(routes.ONBOARD_SCREEN);
    }, 5000);
  });
  return (
    <Block flex justifyCenter alignCenter backgroundColor={theme.colors.blue}>
      <StatusBar barStyle="light-content" />
      <Image style={styles.logo} source={icons.logo} />
    </Block>
  );
};

export default FlashScreen;
