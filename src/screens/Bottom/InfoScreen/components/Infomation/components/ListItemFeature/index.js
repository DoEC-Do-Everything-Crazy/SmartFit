import {Course, HeartPf, Order, Promotion, Setting} from '@assets/icons';
import {Block} from '@components';
import ItemFeature from '@components/ItemList/ItemFeature';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useTheme} from '@theme';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const ListItemFeature = () => {
  const {t} = useTranslation();
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);

  const theme = useTheme(themeStore);

  const navigation = useNavigation();

  const DATA_FEATURE = [
    {
      id: 1,
      title: t('yourFavorite'),
      image: <HeartPf activeColor={theme.colors.iconInf} isActive={true} />,
      navigation: routes.YOUR_FAVORITE_SCREEN,
    },
    {
      id: 2,
      title: t('myCourse'),
      image: <Course color={theme.colors.iconInf} />,
      navigation: routes.COURSE_LIST_TYPE_SCREEN,
      value: 'myCourse',
    },
    {
      id: 3,
      title: t('promotion'),
      image: <Promotion color={theme.colors.iconInf} />,
      navigation: routes.NOTIFICATION_SCREEN,
      value: 0,
    },
    {
      id: 4,
      title: t('order'),
      image: <Order color={theme.colors.iconInf} />,
      navigation: routes.ORDER_SCREEN,
    },
    {
      id: 5,
      title: t('setting'),
      image: <Setting color={theme.colors.iconInf} />,
      navigation: routes.SETTING_SCREEN,
    },
  ];

  const _renderItem = ({item}) => {
    const onPress = () => {
      navigation.navigate(item.navigation, {valuePromotion: item.value});
    };
    return (
      <ItemFeature height={50} title={item.title} onPress={onPress}>
        <Block>{item.image}</Block>
      </ItemFeature>
    );
  };
  return (
    <Block flex paddingHorizontal={16} height="50%">
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
