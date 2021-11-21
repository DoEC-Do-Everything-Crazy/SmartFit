/* eslint-disable react-hooks/exhaustive-deps */
import {Block, ListDataFooter} from '@components';
import React, {useEffect, useState} from 'react';

import {FlatList} from 'react-native';
import ItemReview from '@components/ItemList/ItemReview';
import RatingValue from '@components/RatingValue';
import {keyExtractor} from 'utils/keyExtractor';
import {rateApi} from 'api/rateApi';

const Review = ({...props}) => {
  const {averageRating, totalReviews, courseId, productId, foodId} = props;

  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [rateCountList, setRateCountList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const _renderItem = ({item, index}) => {
    return (
      <ItemReview
        key={keyExtractor(item, index)}
        author={item.author}
        content={item.content}
        date={item.updatedAt}
        image={item.image}
        rating={item.rate}
      />
    );
  };

  const handleLoadMore = async () => {
    try {
      if (allLoaded || isLoading) {
        return;
      }

      setIsLoading(true);
      const query = {pageNumber, courseId, foodId, productId};

      const response = await rateApi.getRates(query);

      const {rates, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      if (rates.length === 0) {
        return;
      }

      setData(data.concat(rates));
      setPageNumber(pageNumber + 1);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  };

  const initData = async () => {
    try {
      setIsLoading(true);

      const query = {pageNumber, courseId, foodId, productId};

      const response = await rateApi.getRates(query);

      const {rates, page, pages, eachRateCount} = response;

      setRateCountList(eachRateCount);

      if (page >= pages) {
        setAllLoaded(true);
      }

      if (rates.length === 0) {
        return;
      }

      setData(rates);
      setPageNumber(pageNumber + 1);
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

  useEffect(() => {
    initData();
  }, []);

  return (
    <Block flex marginTop={10} marginHorizontal={16}>
      <RatingValue
        averageRating={averageRating}
        totalReviews={totalReviews}
        eachRateCount={rateCountList}
      />
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={_renderItem}
        contentContainerStyle={{marginTop: 20}}
        ListFooterComponent={_footerComponent}
      />
    </Block>
  );
};

export default Review;
