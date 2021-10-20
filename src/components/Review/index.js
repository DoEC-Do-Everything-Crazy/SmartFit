import {Block, Text} from '@components';
import React from 'react';
import {FlatList} from 'react-native';
import ItemReview from '@components/ItemList/ItemReview';

const Review = ({data}) => {
  const _renderItem = ({item}) => (
    <ItemReview image={item.image} name={item.name} />
  );

  return (
    <Block flex marginTop={10} marginHorizontal={16}>
      <Text size={20} fontType="bold">
        8 Reviews
      </Text>
      <FlatList
        contentContainerStyle={{marginTop: 20}}
        renderItem={_renderItem}
        data={data}
        keyExtractor={item => item.id}
      />
    </Block>
  );
};

export default Review;
