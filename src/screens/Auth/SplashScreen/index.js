import {Animated, Dimensions, StatusBar, Text} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

/* eslint-disable react-hooks/exhaustive-deps */
import {Block} from '@components';
import {Logo} from '@assets/icons';
import {changeLanguage} from 'reduxs/reducers';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const SplashScreen = props => {
  const {
    theme: {theme: themeStore},
    user: {first},
    turn: {isTurnPassword},
  } = useSelector(state => state.root);

  const dispatch = useDispatch();
  const theme = useTheme(themeStore);
  const languageStore = useSelector(state => state.root.setting.language);

  const styles = useStyles(props, themeStore);
  const navigation = useNavigation();
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    dispatch(changeLanguage(languageStore));
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name:
              first === false
                ? routes.ONBOARD_SCREEN
                : isTurnPassword
                ? routes.PASSWORD_SCREEN
                : routes.BOTTOM_TAB,
          },
        ],
      });
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
  }, [fadeAnim, first, moveAnim, navigation]);
  return (
    <Block flex justifyCenter alignCenter backgroundColor={theme.colors.blue}>
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
