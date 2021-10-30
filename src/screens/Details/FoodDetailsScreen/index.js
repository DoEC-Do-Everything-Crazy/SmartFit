/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Button, Header, Text} from '@components';
import RatingValue from '@components/RatingValue';
import Review from '@components/Review';
import {useTheme} from '@theme';
import {foodApi} from 'api/foodApi';
import {rateApi} from 'api/rateApi';
import React, {useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import DescriptionDetail from './components/DescriptionDetail';
import ProductContent from './components/ProductContent';
import {useStyles} from './styles';

const FoodDetailsScreen = ({route, props}) => {
  const {id} = route.params;
  const [food, setFood] = useState(undefined);
  const [rate, setRate] = useState(1);
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
      const data = await foodApi.getFood(foodId);
      setFood(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getFoodRating = async foodId => {
    try {
      const data = await rateApi.getRateById('foodId', foodId);
      setRate(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getFoodDetail(id);
    getFoodRating(id);
  }, []);

  return (
    <>
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
            <Block marginTop={20} row paddingHorizontal={16}>
              <Text fontType="bold" size={17}>
                {t('review')}:
              </Text>
              <Pressable onPress={handleShowReview}>
                <Text style={styles.link} marginLeft={15} size={17}>
                  {t('readMore')}
                </Text>
              </Pressable>
            </Block>
            {isShowReview ? (
              <>
                <RatingValue />
                <Review rate={rate} />
              </>
            ) : null}
          </ScrollView>
          <Button
            title={t('buyNow')}
            containerStyle={{backgroundColor: theme.colors.blue}}
            titleStyle={styles.btn}
          />
        </Block>
      )}
    </>
  );
};

export default FoodDetailsScreen;