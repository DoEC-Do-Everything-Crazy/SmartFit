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
import {useTranslation} from 'react-i18next';

const ListMenu = () => {
  const {t} = useTranslation();
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const navigation = useNavigation();
  const DATA = [
    {
      title: t('course'),
      icon: <Course color={theme.colors.white} />,
      navigation: routes.COURSE_LIST_TYPE_SCREEN,
    },
    {
      title: t('product'),
      icon: <Equipment color={theme.colors.white} />,
      navigation: routes.BOTTOM_TAB_PRODUCT,
    },
    {
      title: t('food'),
      icon: <Food color={theme.colors.white} />,
      navigation: routes.FOOD_LIST_SCREEN,
    },
    {
      title: t('discount') + ' 20%',
      icon: <Discount20 color={theme.colors.white} />,
    },
    {
      title: t('discount') + ' 50%',
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
