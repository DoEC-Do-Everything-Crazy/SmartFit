import {Block, Button, Header, Text} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Rating} from 'react-native-ratings';
import {ScrollView} from 'react-native';
import DescriptionDetail from './components/DescriptionDetail';
import ProductContent from './components/ProductContent';
import RatingValue from './components/RatingValue';
import Review from './components/Review';

const data = [
  {
    id: 1,
    title: 'Protein',
    stats: '160g',
  },
  {
    id: 2,
    title: 'Carbs',
    stats: '45g',
  },
  {
    id: 3,
    title: 'Vitamin',
    stats: 'A+',
  },
];

const data_review = [
  {
    id: 1,
    image: 'https://pbs.twimg.com/media/EYVxlOSXsAExOpX?format=jpg&name=small',
    name: 'Khanh',
    ratings: 5,
  },
  {
    id: 2,
    image: 'https://pbs.twimg.com/media/EYVxlOSXsAExOpX?format=jpg&name=small',
    name: 'Khanh 1',
    ratings: 5,
  },
  {
    id: 3,
    image: 'https://pbs.twimg.com/media/EYVxlOSXsAExOpX?format=jpg&name=small',
    name: 'Khanh 2',
    ratings: 5,
  },
];

const FoodDetailsScreen = () => {
  return (
    <Block flex backgroundColor={theme.colors.background}>
      <Header canGoBack title="Food Details" colorTheme={theme.colors.black} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductContent data={data} />
        <DescriptionDetail />
        <RatingValue />
        <Review data={data_review} />
      </ScrollView>
      <Block paddingHorizontal={16}>
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
    </Block>
  );
};

export default FoodDetailsScreen;
