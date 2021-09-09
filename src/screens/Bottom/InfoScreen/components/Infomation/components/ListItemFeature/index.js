import {icons} from '@assets';
import {Block} from '@components';
import ItemFeature from '@components/Common/ItemList/ItemFeature';
import React from 'react';
import {FlatList} from 'react-native';
const data = [
  {
    id: 1,
    title: 'Your favorite',
    image: icons.heartPf,
  },
  {
    id: 2,
    title: 'Payment',
    image: icons.payment,
  },
  {
    id: 3,
    title: 'Promotion',
    image: icons.promotion,
  },
  {
    id: 4,
    title: 'Setting',
    image: icons.setting,
  },
];
const ListItemFeature = () => {
  const _renderItem = ({item}) => (
    <ItemFeature
      height={50}
      icon={item.image}
      title={item.title}
      onPress={() => {
        console.log(item.title);
      }}
    />
  );
  return (
    <Block paddingHorizontal={16} height="50%">
      <FlatList
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        data={data}
        keyExtractor={item => item.id}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListItemFeature;
