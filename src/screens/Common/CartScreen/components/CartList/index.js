import {Block, Text} from '@components';
import ItemCart from '@components/Common/ItemList/ItemCart';
import React from 'react';
import {FlatList} from 'react-native';
import {theme} from '@theme';

const CartList = ({DATA}) => {
  const renderItem = ({item}) => (
    <ItemCart
      id={item.id}
      title={item.name}
      image={item.image}
      price={item.price}
    />
  );
  return (
    <Block flex>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Block>
  );
};

export default CartList;
