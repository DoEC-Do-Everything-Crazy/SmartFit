import {Block, Button, Header} from '@components';
import {DATA_FOOD, DATA_REVIEW} from '@constants/';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {ScrollView} from 'react-native';
import DescriptionDetail from './components/DescriptionDetail';
import ProductContent from './components/ProductContent';
import RatingValue from './components/RatingValue';
import Review from './components/Review';

const FoodDetailsScreen = () => {
  return (
    <Block flex backgroundColor={theme.colors.background}>
      <Header canGoBack title="Food Details" colorTheme={theme.colors.black} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductContent data={DATA_FOOD} />
        <DescriptionDetail />
        <RatingValue />
        <Review data={DATA_REVIEW} />
      </ScrollView>
      <Button
        title="BUY NOW"
        containerStyle={{backgroundColor: theme.colors.blue}}
        titleStyle={{
          fontSize: getSize.m(18),
          fontWeight: 'bold',
          color: theme.colors.white,
        }}
      />
    </Block>
  );
};

export default FoodDetailsScreen;
