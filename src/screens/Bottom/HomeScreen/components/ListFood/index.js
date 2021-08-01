import {Block} from '@components';
import ItemFood from '@components/Common/ItemList/ItemFood';
import React from 'react';
import {FlatList} from 'react-native';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ListFood = () => {
  const _renderItem = (item, index) => <ItemFood key={index} />;
  return (
    <Block flex marginTop={32}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={_renderItem}
        data={data}
        keyExtractor={item => item.item_id}
      />
    </Block>
  );
};

export default ListFood;
