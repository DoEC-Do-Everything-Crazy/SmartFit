import {Block} from '@components';
import ItemFood from '@components/Common/ItemList/ItemFood';
import React from 'react';
import {ScrollView} from 'react-native';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ListFood = () => {
  const _renderItem = (item, index) => <ItemFood key={index} />;
  return (
    <Block flex marginTop={32}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map(_renderItem)}
      </ScrollView>
    </Block>
  );
};

export default ListFood;
