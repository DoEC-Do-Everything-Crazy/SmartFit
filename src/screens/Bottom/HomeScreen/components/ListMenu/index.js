import {
  Course,
  Discount20,
  Discount50,
  Equipment,
  Food,
  Social,
} from '@assets/icons';
import {Block} from '@components';
import ItemMenu from '@components/ItemList/ItemMenu';
import React from 'react';
import {FlatList} from 'react-native';
import {useTheme} from '@theme';
import {useSelector} from 'react-redux';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';

const ListMenu = () => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const navigation = useNavigation();
  const DATA = [
    {
      title: 'Course',
      icon: <Course color={theme.colors.white} />,
      navigation: routes.COURSE_LIST_TYPE_SCREEN,
    },
    {
      title: 'Product',
      icon: <Equipment color={theme.colors.white} />,
      navigation: routes.BOTTOM_TAB_PRODUCT,
    },
    {
      title: 'Food',
      icon: <Food color={theme.colors.white} />,
      navigation: routes.FOOD_LIST_SCREEN,
    },
    {
      title: 'Social',
      icon: <Social color={theme.colors.white} />,
    },
    {
      title: 'Discount 20%',
      icon: <Discount20 color={theme.colors.white} />,
    },
    {
      title: 'Discount 50%',
      icon: <Discount50 color={theme.colors.white} />,
    },
  ];
  const _renderItem = ({item, index}) => {
    const onPress = () => {
      navigation.navigate(item.navigation);
    };
    return (
      <ItemMenu
        onPress={onPress}
        index={index}
        title={item.title}
        icon={item.icon}
      />
    );
  };
  return (
    <Block flex alignCenter marginTop={10}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        nestedScrollEnabled
        data={DATA}
        keyExtractor={(item, index) => index}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListMenu;
