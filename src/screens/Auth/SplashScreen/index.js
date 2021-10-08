import {Block} from '@components';
import {useTheme} from '@theme';
import React, {useEffect, useRef} from 'react';
import {StatusBar, Animated, Text, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';
import {Logo} from '@assets/icons';
import {useStyles} from './styles';

const SplashScreen = props => {
  const {
    theme: {theme: themeStore},
    user: {first},
    turn: {isTurnPassword},
  } = useSelector(state => state.root);
  const theme = useTheme(themeStore);

  const styles = useStyles(props, themeStore);
  const navigation = useNavigation();
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    setTimeout(() => {
      first === false
        ? navigation.navigate(routes.ONBOARD_SCREEN)
        : isTurnPassword
        ? navigation.navigate(routes.PASSWORD_SCREEN)
        : navigation.navigate(routes.BOTTOM_TAB);
    }, 2200);

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
  }, [fadeAnim, first, isTurnPassword, moveAnim, navigation]);
  return (
    <Block flex justifyCenter alignCenter backgroundColor={theme.colors.blue}>
      <StatusBar barStyle="light-content" />
      <Animated.View style={[styles.logo, {opacity: fadeAnim}]}>
        <Logo />
      </Animated.View>
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
