import {Block} from '@components';
import ItemMenu from '@components/Common/ItemList/ItemMenu';
import React from 'react';
import {ScrollView, FlatList} from 'react-native';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ListMenu = () => {
  const _renderItem = (item, index) => <ItemMenu key={index} />;
  return (
    <Block flex marginTop={32}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        nestedScrollEnabled
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={_renderItem}
      />
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map(_renderItem)}
      </ScrollView> */}
    </Block>
  );
};

export default ListMenu;
