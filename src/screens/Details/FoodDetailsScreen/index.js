/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Button, Header, Text} from '@components';
import {Pressable, ScrollView} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import DescriptionDetail from './components/DescriptionDetail';
import ProductContent from './components/ProductContent';
import Review from '@components/Review';
import {SafeAreaView} from 'react-native-safe-area-context';
import Snackbar from 'react-native-snackbar';
import {addCartItem} from 'reduxs/reducers';
import {foodApi} from 'api/foodApi';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const FoodDetailsScreen = ({route, props}) => {
  const dispatch = useDispatch();
  const {id} = route.params;
  const [food, setFood] = useState(undefined);
  const [isShowReview, setShowReview] = useState();
  const {t} = useTranslation();
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const handleShowReview = useCallback(() => {
    setShowReview(!isShowReview);
  }, [isShowReview]);

  const getFoodDetail = async foodId => {
    try {
      const response = await foodApi.getFood(foodId);
      setFood(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  const addToCart = () => {
    dispatch(addCartItem({addItem: food, quantity: 1}));

    Snackbar.show({
      text: t('addedToCart'),
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  useEffect(() => {
    getFoodDetail(id);
  }, []);

  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={styles.sendControlContainerOuter}>
      {food && (
        <Block flex backgroundColor={theme.colors.backgroundSetting}>
          <Header
            canGoBack
            title={t('foodDetails')}
            colorTheme={theme.colors.black}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <ProductContent food={food} />
            <DescriptionDetail desc={food.description} />
            <Block marginTop={20} paddingBottom={20} row paddingHorizontal={16}>
              <Text fontType="bold" size={17}>
                {t('Review')}:
              </Text>
              <Pressable onPress={handleShowReview}>
                <Text style={styles.link} marginLeft={15} size={17}>
                  {isShowReview ? t('hidden') : t('readMore')}
                </Text>
              </Pressable>
            </Block>
            {isShowReview ? (
              <Review
                averageRating={food.averageRating}
                totalReviews={food.totalReviews}
                foodId={food._id}
              />
            ) : null}
          </ScrollView>
          <Button
            onPress={addToCart}
            title={t('addToCart')}
            containerStyle={{backgroundColor: theme.colors.blue}}
            titleStyle={styles.btn}
          />
        </Block>
      )}
    </SafeAreaView>
  );
};

export default FoodDetailsScreen;
