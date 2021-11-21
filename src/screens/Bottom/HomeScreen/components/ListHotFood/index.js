/* eslint-disable react-hooks/exhaustive-deps */
import {Block, ListDataFooter, Text} from '@components';
import {FlatList, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';

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
  const [pageNumber, setPageNumber] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = async () => {
    if (allLoaded || isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await foodApi.getFoods({
        pageNumber,
      });

      const {foods, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      setData(data.concat(foods));
      setPageNumber(pageNumber + 1);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  };

  const initData = async () => {
    setIsLoading(true);

    try {
      const response = await foodApi.getFoods({
        pageNumber,
      });

      const {foods, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      setData(data.concat(foods));
      setPageNumber(pageNumber + 1);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  };

  const _footerComponent = (
    <Block>
      <ListDataFooter
        onPress={handleLoadMore}
        allLoaded={allLoaded}
        isLoading={isLoading}
        horizontal
      />
    </Block>
  );

  const _renderItem = ({item, index}) => (
    <ItemHotFood item={item} index={index} />
  );

  useEffect(() => {
    // initData();
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
        <Pressable
          onPress={() =>
            navigation.navigate(routes.FOOD_LIST_SCREEN, {
              title: t('healthyFood'),
            })
          }>
          <Text size={17} style={styles.link}>
            {t('seeAll')}
          </Text>
        </Pressable>
      </Block>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        nestedScrollEnabled
        data={data}
        keyExtractor={keyExtractor}
        renderItem={_renderItem}
        ListFooterComponent={_footerComponent}
      />
    </Block>
  );
};

export default ListHotFood;
