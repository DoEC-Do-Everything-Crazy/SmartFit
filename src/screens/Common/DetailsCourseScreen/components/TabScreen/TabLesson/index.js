import {Block} from '@components';
import {theme} from '@theme';
import React from 'react';
import ItemLesson from '@components/Common/ItemList/ItemLesson';
import {FlatList} from 'react-native';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const TabLesson = () => {
  const _renderItem = (item, index) => <ItemLesson index={index} />;
  return (
    <Block flex paddingHorizontal={16} backgroundColor={theme.colors.white}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={_renderItem}
        keyExtractor={item => item.item_id}
      />
    </Block>
  );
};

export default TabLesson;
