/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Text} from '@components';
import {FlatList, Pressable} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import ItemHotFood from '@components/ItemList/ItemHotFood';
import {foodApi} from 'api/foodApi';
import {keyExtractor} from 'utils/keyExtractor';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const ListHotFood = props => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const initData = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await foodApi.getFoods({
        pageNumber: 1,
        orderBy: 'type',
        active: true,
      });

      const {foods} = response;

      setData(foods);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  }, []);

  const _renderItem = useCallback(({item, index}) => {
    return <ItemHotFood item={item} index={index} />;
  }, []);

  const handleOnPress = useCallback(() => {
    navigation.navigate(routes.FOOD_LIST_SCREEN, {
      title: t('healthyFood'),
    });
  }, []);

  useEffect(() => {
    initData();
  }, []);

  return (
    <Block flex marginTop={30} marginBottom={10}>
      <Block
        row
        alignCenter
        marginHorizontal={16}
        marginBottom={20}
        space="between">
        <Text size={20} fontType="bold" color={theme.colors.iconInf}>
          {t('hotFood')}
        </Text>
        <Pressable onPress={handleOnPress}>
          <Text size={17} style={styles.link}>
            {t('seeAll')}
          </Text>
        </Pressable>
      </Block>
      {!isLoading && data.length !== 0 ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          nestedScrollEnabled
          data={data}
          keyExtractor={keyExtractor}
          renderItem={_renderItem}
        />
      ) : null}
    </Block>
  );
};

export default ListHotFood;
