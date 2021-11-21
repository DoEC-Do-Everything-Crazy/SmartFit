import {Block, Empty, ListDataFooter} from '@components';
import React, {useEffect, useState} from 'react';

import {FlatList} from 'react-native';
import ItemPopular from '@components/ItemList/ItemPopular';
import {foodApi} from 'api/foodApi';
import {keyExtractor} from 'utils/keyExtractor';
/* eslint-disable react-hooks/exhaustive-deps */
import {lotties} from '@assets';

const ListItemPopular = ({...props}) => {
  const {recommendData} = props;
  const [data, setData] = useState(recommendData ? recommendData : []);
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
    <ListDataFooter
      onPress={handleLoadMore}
      allLoaded={allLoaded}
      isLoading={isLoading}
    />
  );

  const _renderItem = ({item, index}) => (
    <ItemPopular item={item} key={index} />
  );

  useEffect(() => {
    !recommendData && initData();
  }, []);

  return (
    <Block flex>
      {!isLoading && data.length === 0 ? (
        <Empty lottie={lotties.emptySearch} />
      ) : (
        <FlatList
          contentContainerStyle={{alignSelf: 'center'}}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          data={data}
          numColumns={2}
          keyExtractor={keyExtractor}
          renderItem={_renderItem}
          ListFooterComponent={!recommendData ? _footerComponent : null}
        />
      )}
    </Block>
  );
};

export default ListItemPopular;
