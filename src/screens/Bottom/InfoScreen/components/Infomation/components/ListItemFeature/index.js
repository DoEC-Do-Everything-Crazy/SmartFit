import {icons} from '@assets';
import {Block} from '@components';
import ItemFeature from '@components/Common/ItemList/ItemFeature';
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {FlatList} from 'react-native';
import {routes} from '@navigation/routes';

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
    title: 'Order',
    image: icons.order,
  },
  {
    id: 5,
    title: 'Setting',
    image: icons.setting,
  },
];
const ListItemFeature = () => {
  const navigation = useNavigation();
  const _renderItem = ({item}) => (
    <ItemFeature
      height={50}
      icon={item.image}
      title={item.title}
      onPress={() => {
        console.log(item.title);
        if (item.title === 'Order') {
          navigation.navigate(routes.ORDER_SCREEN);
        }
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
