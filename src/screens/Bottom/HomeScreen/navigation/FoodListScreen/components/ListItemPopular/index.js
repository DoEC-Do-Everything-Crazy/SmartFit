import {Block, Text} from '@components';
import ItemPopular from '@components/Common/ItemList/ItemPopular';
import React from 'react';
import {FlatList} from 'react-native';
const data = [1, 2, 3, 4, 5, 6, 7, 8];
const ListItemPopular = () => {
  const _renderItem = ({item}) => <ItemPopular />;
  return (
    <Block flex>
      <Block row marginHorizontal={16} marginBottom={10} space="between">
        <Text fontType="bold" size={18}>
          Popular Items
        </Text>
        <Text size={16}>Show all {'>'} </Text>
      </Block>
      <FlatList
        contentContainerStyle={{alignSelf: 'center'}}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        data={data}
        numColumns={3}
        keyExtractor={item => item.id}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListItemPopular;
