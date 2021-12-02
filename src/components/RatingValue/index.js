/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Text} from '@components';

import {Rating} from 'react-native-ratings';
import React from 'react';
import {keyExtractor} from 'utils/keyExtractor';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const RatingValue = ({...props}) => {
  const {averageRating, totalReviews, eachRateCount} = props;

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);

  const {t} = useTranslation();

  const _renderItem = (item, index) => {
    return (
      <Block row key={keyExtractor(item, index)}>
        <Block>
          <Rating
            flex
            ratingColor="#FF7F50"
            ratingCount={5}
            readonly={true}
            startingValue={item._id}
            imageSize={15}
            tintColor={theme.colors.backgroundSetting}
            ratingBackgroundColor="transparent"
            style={{alignSelf: 'flex-end'}}
          />
        </Block>

        <Block
          marginVertical={5}
          height={6}
          width={100}
          borderRadius={8}
          backgroundColor={themeStore === 'dark' ? 'white' : 'lightgray'}
          marginLeft={8}>
          <Block
            width={item.percent}
            borderRadius={8}
            height={6}
            backgroundColor={
              item.percent !== 0
                ? themeStore === 'dark'
                  ? 'orange'
                  : 'red'
                : undefined
            }
          />
        </Block>
        <Block>
          <Text size={10} lineHeight={16} marginLeft={8}>
            {item.count}
          </Text>
        </Block>
      </Block>
    );
  };

  return (
    <Block flex marginHorizontal={16}>
      <Block row>
        <Block flex>
          <Text size={40} fontType="bold">
            {averageRating}
          </Text>
          <Text>
            {totalReviews} {t('reviews')}
          </Text>
        </Block>

        <Block>{eachRateCount.reverse().map(_renderItem)}</Block>
      </Block>
    </Block>
  );
};

export default RatingValue;
