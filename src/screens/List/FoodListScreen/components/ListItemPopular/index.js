import {Block, Empty, ListDataFooter} from '@components';
import React, {useEffect, useState} from 'react';

import {FlatList} from 'react-native';
import ItemPopular from '@components/ItemList/ItemPopular';
import {foodApi} from 'api/foodApi';
import {keyExtractor} from 'utils/keyExtractor';
/* eslint-disable react-hooks/exhaustive-deps */
import {lotties} from '@assets';
import setAuthToken from 'utils/setAuthToken';
import {useSelector} from 'react-redux';

const ListItemPopular = ({...props}) => {
  const {
    user: {token},
  } = useSelector(stateRoot => stateRoot.root);

  const {recommendData, dailyMeals} = props;
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
      let response = {};

      if (!dailyMeals) {
        response = await foodApi.getFoods({
          pageNumber,
        });
      } else {
        response = await foodApi.getUserDailyMeals({
          pageNumber,
        });
      }

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
      let response = {};

      if (!dailyMeals) {
        response = await foodApi.getFoods({
          pageNumber,
        });
      } else {
        response = await foodApi.getUserDailyMeals({
          pageNumber,
        });
      }

      const {foods, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      setData(foods);
      setPageNumber(2);
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
    setAuthToken(token);
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
