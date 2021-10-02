import {Block} from '@components';
import {theme} from '@theme';
import React, {useEffect} from 'react';
import {icons} from '@assets';
import styles from './styles';
import {Image, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';

const FlashScreen = () => {
  const {first} = useSelector(state => state.root.user);
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      first === false
        ? navigation.navigate(routes.ONBOARD_SCREEN)
        : navigation.navigate(routes.BOTTOM_TAB);
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
