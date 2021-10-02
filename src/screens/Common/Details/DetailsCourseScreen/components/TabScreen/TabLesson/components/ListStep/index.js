import {Block, Text} from '@components';
import ItemLesson from '@components/ItemList/ItemLesson';
import {theme} from '@theme';
import React from 'react';
import {FlatList} from 'react-native';

const ListStep = () => {
  const _renderItem = (item, index) => <ItemLesson index={index} />;
  return (
    <Block
      flex
      paddingHorizontal={16}
      backgroundColor={theme.colors.background}>
      <Text size={30} fontType="bold">
        Lessons 1
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={_renderItem}
        keyExtractor={item => item.item_id}
      />
    </Block>
  );
};

export default ListStep;
