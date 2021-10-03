import {Block} from '@components';
import {theme} from '@theme';
import React, {useEffect, useRef} from 'react';
import {fonts, icons} from '@assets';
import styles from './styles';
import {Image, StatusBar, Animated, Text, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';

const SplashScreen = () => {
  const {first} = useSelector(state => state.root.user);
  const navigation = useNavigation();
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    setTimeout(() => {
      first === false
        ? navigation.navigate(routes.ONBOARD_SCREEN)
        : navigation.navigate(routes.BOTTOM_TAB);
    }, 3000);

    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 1000,
        toValue: Dimensions.get('window').width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 1000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 1000,
      toValue: 1,
      delay: 1000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim, first, moveAnim, navigation]);
  return (
    <Block flex justifyCenter alignCenter backgroundColor={theme.colors.blue}>
      <StatusBar barStyle="light-content" />
      <Animated.Image
        style={[styles.logo, {opacity: fadeAnim}]}
        source={icons.logo}
      />
      <Animated.View style={[styles.groupText, {marginLeft: moveAnim}]}>
        <Text style={styles.text}>S</Text>
        <Animated.Text style={[styles.text, {opacity: fadeAnim}]}>
          martFit
        </Animated.Text>
      </Animated.View>
    </Block>
  );
};

export default SplashScreen;
