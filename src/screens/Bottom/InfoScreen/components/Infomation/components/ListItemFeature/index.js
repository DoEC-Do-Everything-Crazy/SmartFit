import {HeartPf, Order, Payment, Promotion, Setting} from '@assets/icons';
import {Block} from '@components';
import ItemFeature from '@components/ItemList/ItemFeature';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';

const ListItemFeature = () => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);

  const theme = useTheme(themeStore);

  const navigation = useNavigation();

  const DATA_FEATURE = [
    {
      id: 1,
      title: 'Your favorite',
      image: <HeartPf color={theme.colors.iconInf} />,
      navigation: routes.YOUR_FAVORITE_SCREEN,
    },
    {
      id: 2,
      title: 'Payment',
      image: <Payment color={theme.colors.iconInf} />,
    },
    {
      id: 3,
      title: 'Promotion',
      image: <Promotion color={theme.colors.iconInf} />,
    },
    {
      id: 4,
      title: 'Order',
      image: <Order color={theme.colors.iconInf} />,
      navigation: routes.ORDER_SCREEN,
    },
    {
      id: 5,
      title: 'Setting',
      image: <Setting color={theme.colors.iconInf} />,
      navigation: routes.SETTING_SCREEN,
    },
  ];

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
