import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Rating} from 'react-native-ratings';

const data_ratings = [5, 4, 3, 2, 1];
const data_line = [80, 60, 40, 20, 10];
const data_value = [12, 5, 4, 2, 0];
const RatingValue = () => {
  const _renderItemRating = count => (
    <Rating
      ratingColor="#FF7F50"
      ratingCount={count}
      startingValue={count}
      imageSize={15}
      tintColor={theme.colors.background}
      ratingBackgroundColor="transparent"
      style={{alignSelf: 'flex-end'}}
    />
  );
  const _renderItemLine = count => (
    <Block
      marginVertical={5}
      height={6}
      width={count}
      borderRadius={8}
      backgroundColor="red"
      borderWidth={2}
      borderColor="red"
      marginLeft={8}
    />
  );
  const _renderItemValue = value => (
    <Text size={10} lineHeight={16} marginLeft={8}>
      {value}
    </Text>
  );
  return (
    <Block flex marginTop={10} marginHorizontal={16}>
      <Text size={20} fontType="bold">
        Rating {'&'} review
      </Text>
      <Block row space="between">
        <Block>
          <Text size={40} fontType="bold">
            4.3
          </Text>
          <Text>23 ratings</Text>
        </Block>
        <Block row>
          <Block>{data_ratings.map(_renderItemRating)}</Block>
          <Block>{data_line.map(_renderItemLine)}</Block>
          <Block>{data_value.map(_renderItemValue)}</Block>
        </Block>
      </Block>
    </Block>
  );
};

export default RatingValue;
