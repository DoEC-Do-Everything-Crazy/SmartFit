import {Block, Text} from '@components';

import {FlatList} from 'react-native';
import ItemReview from '@components/ItemList/ItemReview';
import React from 'react';
import {useTranslation} from 'react-i18next';

const Review = ({rate}) => {
  const {t} = useTranslation();
  const _renderItem = ({item}) => {
    return (
      <ItemReview
        user={item.user}
        content={item.content}
        date={item.updatedAt}
        image={item.image}
        rating={item.rate}
      />
    );
  };

  return (
    <Block flex marginTop={10} marginHorizontal={16}>
      <Text size={20} fontType="bold">
        8 {t('review')}
      </Text>
      <FlatList
        contentContainerStyle={{marginTop: 20}}
        renderItem={_renderItem}
        data={rate}
        keyExtractor={item => item.id}
      />
    </Block>
  );
};

export default Review;
