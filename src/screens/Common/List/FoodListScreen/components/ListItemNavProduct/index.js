import {Block} from '@components';
import ItemNavProduct from '@components/ItemList/ItemNavProduct';
import React from 'react';
import {FlatList} from 'react-native';
import {DATA_FOOD_LIST} from '@constants';

const ListItemNavProduct = () => {
  const _renderItem = ({item}) => <ItemNavProduct />;
  return (
    <Block marginHorizontal={8} marginBottom={15}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DATA_FOOD_LIST}
        keyExtractor={item => item.id}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListItemNavProduct;
