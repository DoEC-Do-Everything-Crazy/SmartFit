import {Block, Header} from '@components';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import React from 'react';
import {ScrollView, Pressable} from 'react-native';
import ListItemNavProduct from './components/ListItemNavProduct';
import ListItemPopular from './components/ListItemPopular';
import {useTranslation} from 'react-i18next';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {Cart} from '@assets/icons';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';
import {useStyles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
const FoodListScreen = props => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();
  const styles = useStyles(props, themeStore);
  const offset = useSharedValue(0);

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
  const onScroll = event => {
    // Check if the user is scrolling up or down by confronting the new scroll position with your own one

    const offsetList = event.nativeEvent.contentOffset.y;

    offsetList > 0 ? (offset.value = 1) : (offset.value = 0);
  };
  const navigation = useNavigation();
  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Header
        canGoBack
        search
        title={t('healthyFood')}
        colorTheme={theme.colors.blue}
      />
      <ScrollView onScroll={onScroll} showsVerticalScrollIndicator={false}>
        <ListItemNavProduct />
        <ListItemPopular />
      </ScrollView>
      <Animated.View style={[styles.groupButton, animatedStyles]}>
        <Pressable
          onPress={() => {
            navigation.navigate(routes.CART_SCREEN);
          }}>
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
  );
};

export default FoodListScreen;
