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
      icon={item.image}
      height={50}
      borderWidth={0.5}
      title={item.title}
      onPress={() => {
        console.log(item.title);
      }}
    />
  );
  return (
    <Block height="50%" paddingHorizontal={16}>
      <Block row alignCenter marginHorizontal={16} space="between"></Block>
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
