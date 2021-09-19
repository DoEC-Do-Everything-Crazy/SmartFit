import {Block} from '@components';
import React from 'react';
import {FlatList} from 'react-native';
import ItemFeature from './ItemFeature';

const ListFeatureSetting = ({data}) => {
  const _renderItem = ({index}) => (
    <ItemFeature
      title={data[index].title}
      data={data[index].data_item_switch}
    />
  );
  return (
    <Block flex>
      <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
      />
    </Block>
  );
};

export default ListFeatureSetting;
