/* eslint-disable react-hooks/exhaustive-deps */
import {Course, HeartPf, Order, Promotion, Setting} from '@assets/icons';
import React, {useCallback} from 'react';

import {Block} from '@components';
import {FlatList} from 'react-native';
import ItemFeature from '@components/ItemList/ItemFeature';
import {keyExtractor} from 'utils/keyExtractor';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

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

  const _renderItem = useCallback(({item}) => {
    const onPress = () => {
      navigation.navigate(item.navigation, {valuePromotion: item.value});
    };

    return (
      <ItemFeature height={50} title={item.title} onPress={onPress}>
        <Block>{item.image}</Block>
      </ItemFeature>
    );
  }, []);

  return (
    <Block flex paddingHorizontal={16} height="50%">
      <FlatList
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        data={DATA_FEATURE}
        keyExtractor={keyExtractor}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListItemFeature;
