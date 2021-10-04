import {HeartPf, Order, Payment, Promotion, Setting} from '@assets/icons';
import {Block} from '@components';
import ItemFeature from '@components/ItemList/ItemFeature';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList} from 'react-native';
const DATA_FEATURE = [
  {
    id: 1,
    title: 'Your favorite',
    image: <HeartPf color={'#045694'} />,
    navigation: routes.YOUR_FAVORITE_SCREEN,
  },
  {
    id: 2,
    title: 'Payment',
    image: <Payment />,
  },
  {
    id: 3,
    title: 'Promotion',
    image: <Promotion />,
  },
  {
    id: 4,
    title: 'Order',
    image: <Order />,
    navigation: routes.ORDER_SCREEN,
  },
  {
    id: 5,
    title: 'Setting',
    image: <Setting />,
    navigation: routes.SETTING_SCREEN,
  },
];
const ListItemFeature = () => {
  const navigation = useNavigation();
  const _renderItem = ({item}) => {
    const onPress = () => {
      navigation.navigate(item.navigation);
    };
    return (
      <ItemFeature height={50} title={item.title} onPress={onPress}>
        <Block>{item.image}</Block>
      </ItemFeature>
    );
  };
  return (
    <Block paddingHorizontal={16} height="50%">
      <FlatList
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        data={DATA_FEATURE}
        keyExtractor={item => item.id}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListItemFeature;
