import {Block} from '@components';
import ItemMenu from '@components/ItemList/ItemMenu';
import React from 'react';
import {FlatList} from 'react-native';

const ListMenu = () => {
  const _renderItem = (item, index) => <ItemMenu key={index} />;
  return (
    <Block flex marginTop={32}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        nestedScrollEnabled
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={(item, index) => index}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListMenu;
