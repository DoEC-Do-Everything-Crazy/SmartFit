/* eslint-disable react-hooks/exhaustive-deps */
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Block, Header, HeaderBanner} from '@components';
import {Pressable, ScrollView} from 'react-native';
import React, {useCallback, useEffect} from 'react';

import {Cart} from '@assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import ListHotCourse from './components/ListHotCourse';
import ListHotFood from './components/ListHotFood';
import ListMenu from './components/ListMenu';
import ListProduct from './components/ListProduct';
import ListRecommended from './components/ListRecommended';
import {routes} from '@navigation/routes';
import setAuthToken from 'utils/setAuthToken';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const HomeScreen = props => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const offset = useSharedValue(0);

  const {
    theme: {theme: themeStore},
    user: {token},
  } = useSelector(stateRoot => stateRoot.root);

  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(offset.value * 255, {
            damping: 20,
            stiffness: 200,
          }),
        },
      ],
    };
  });

  const onScroll = useCallback(event => {
    const offsetList = event.nativeEvent.contentOffset.y;

    offsetList > 0 ? (offset.value = 1) : (offset.value = 0);
  }, []);

  const handleNavigateCartScreen = useCallback(() => {
    navigation.navigate(routes.CART_SCREEN);
  }, []);

  useEffect(() => {
    setAuthToken(token);
  }, []);

  return (
    <Block flex backgroundColor={theme.colors.blue}>
      <Header type="Bottom" title={t('home')} colorTheme={theme.colors.white} />
      <Block
        flex
        alignCenter
        backgroundColor={theme.colors.backgroundSetting}
        style={styles.container}>
        <Block>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={onScroll}
            showsVerticalScrollIndicator={false}>
            <HeaderBanner />
            <ListMenu />
            <ListRecommended />
            <ListHotFood />
            <ListHotCourse />
            <ListProduct />
          </ScrollView>
        </Block>
        <Animated.View style={[styles.groupButton, animatedStyles]}>
          <Pressable onPress={handleNavigateCartScreen}>
            {themeStore === 'dark' ? (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#70A2FF', '#54F0D1']}
                style={styles.layout}
              />
            ) : null}
            <Cart color={theme.colors.white} />
          </Pressable>
        </Animated.View>
      </Block>
    </Block>
  );
};

export default HomeScreen;
