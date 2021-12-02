/* eslint-disable react-hooks/exhaustive-deps */
import {Block, ListDataFooter, Text} from '@components';
import {FlatList, Pressable} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import ItemReview from '@components/ItemList/ItemReview';
import RatingValue from '@components/RatingValue';
import {keyExtractor} from 'utils/keyExtractor';
import {rateApi} from 'api/rateApi';
import {useSelector} from 'react-redux';
// import {useStyles} from './styles';
import {useTheme} from '@theme';

const Review = ({...props}) => {
  const {
    averageRating,
    totalReviews,
    itemKey,
    courseId,
    productId,
    foodId,
    onRate,
  } = props;

  const {
    theme: {theme: themeStore},
    user: {user},
  } = useSelector(stateRoot => stateRoot.root);

  // const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [rateCountList, setRateCountList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = async () => {
    try {
      if (allLoaded || isLoading) {
        return;
      }

      setIsLoading(true);

      const response = await rateApi.getRates({
        pageNumber,
        courseId,
        foodId,
        productId,
      });

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

      const response = await rateApi.getRates({
        pageNumber: 1,
        courseId,
        foodId,
        productId,
      });

      const {rates, page, pages, eachRateCount} = response;

      setRateCountList(eachRateCount);

      if (page >= pages) {
        setAllLoaded(true);
      }

      if (rates.length === 0) {
        return;
      }

      setData(rates);
      setPageNumber(2);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  };

  const _renderItem = useCallback(({item}) => {
    return <ItemReview item={item} />;
  }, []);

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
    <Block>
      <RatingValue
        averageRating={averageRating}
        totalReviews={totalReviews}
        eachRateCount={rateCountList}
      />
      <Block flex marginHorizontal={16}>
        <Pressable onPress={onRate}>
          <Block
            marginTop={30}
            padding={16}
            paddingHorizontal={20}
            borderRadius={8}
            backgroundColor={theme.colors.border}>
            <Block>
              <Text>Write review ...</Text>
            </Block>
          </Block>
        </Pressable>
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          renderItem={_renderItem}
          ListFooterComponent={_footerComponent}
        />
      </Block>
    </Block>
  );
};

export default Review;
