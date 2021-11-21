/* eslint-disable react-hooks/exhaustive-deps */
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Block, Header} from '@components';
import {Pressable, ScrollView} from 'react-native';
import {useEffect, useState} from 'react';

import {Cart} from '@assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import ListItemNavProduct from './components/ListItemNavProduct';
import ListItemPopular from './components/ListItemPopular';
import {bmiApi} from 'api/bmiApi';
import {recommendedApi} from 'api/recommendedApi';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const FoodListScreen = ({route, props}) => {
  const navigation = useNavigation();
  const {
    theme: {theme: themeStore},
    user: {user},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();
  const styles = useStyles(props, themeStore);
  const offset = useSharedValue(0);

  const {title} = route.params;
  const [foodsBMI, setFoodsBMI] = useState([]);

  console.log(title);

  const fetchFoodsByBMI = async () => {
    try {
      const response = await bmiApi.getBMI(user.uid, {
        validateStatus: false,
      });
      if (response) {
        const resData = await recommendedApi.getFoodsByBMI(
          response.bmi,
          'food',
          {
            validateStatus: false,
          },
        );
        setFoodsBMI(resData);
      }
    } catch (error) {
      console.log('error', error.message);
    }
  };

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
    const offsetList = event.nativeEvent.contentOffset.y;

    offsetList > 0 ? (offset.value = 1) : (offset.value = 0);
  };

  useEffect(() => {
    fetchFoodsByBMI();
  }, []);

  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Header
        canGoBack
        search
        title={t('healthyFood')}
        colorTheme={theme.colors.blue}
      />
      <ScrollView onScroll={onScroll} showsVerticalScrollIndicator={false}>
        {title === t('dailyMeals') ? (
          <ListItemPopular foodsBMI={foodsBMI} />
        ) : (
          <>
            <ListItemNavProduct />
            <ListItemPopular />
          </>
        )}
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
