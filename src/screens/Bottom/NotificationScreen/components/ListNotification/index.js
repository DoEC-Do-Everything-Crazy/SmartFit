import {Block, ListDataFooter} from '@components';
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';

import {FlatList} from 'react-native';
import ItemNotification from '@components/ItemList/ItemNotification';
import {keyExtractor} from 'utils/keyExtractor';
import {promotionApi} from 'api/promotionApi.js';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';

const ListNotification = props => {
  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);
  const theme = useTheme(themeStore);

  const {valuePromotion} = props;

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
      const response = await promotionApi.getPromotions({
        value: valuePromotion,
        pageNumber,
      });

      const {promotions, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      setData(data.concat(promotions));
      setPageNumber(pageNumber + 1);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  };

  const initData = async () => {
    setIsLoading(true);

    try {
      const response = await promotionApi.getPromotions({
        value: valuePromotion,
        pageNumber,
      });

      const {promotions, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      setData(promotions);
      setPageNumber(2);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  };

  const _footerComponent = () => {
    return (
      <ListDataFooter
        allLoaded={allLoaded}
        isLoading={isLoading}
        onPress={handleLoadMore}
      />
    );
  };

  const _renderItem = ({item}) => <ItemNotification item={item} />;

  useEffect(() => {
    initData();
  }, []);

  return (
    <Block marginTop={10} backgroundColor={theme.colors.backgroundSetting}>
      <FlatList
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        data={data}
        keyExtractor={keyExtractor}
        renderItem={_renderItem}
        ListFooterComponent={_footerComponent}
      />
    </Block>
  );
};

export default ListNotification;
