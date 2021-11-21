import {Block, ListDataFooter} from '@components';
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';

import Carousel from 'react-native-snap-carousel';
import ItemNavProduct from '@components/ItemList/ItemNavProduct';
import {foodApi} from 'api/foodApi';
import {keyExtractor} from 'utils/keyExtractor';
import {width} from '@utils/responsive';

const ListItemNavProduct = () => {
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
    <ListDataFooter
      onPress={handleLoadMore}
      allLoaded={allLoaded}
      isLoading={isLoading}
    />
  );

  const _renderItem = ({item, index}) => {
    return <ItemNavProduct item={item} />;
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <Block marginHorizontal={8} paddingBottom={15} paddingTop={20}>
      <Block alignCenter marginTop={16}>
        <Carousel
          loop
          sliderWidth={width}
          sliderHeight={width}
          itemWidth={width / 2}
          data={data}
          hasParallaxImages={true}
          renderItem={_renderItem}
          keyExtractor={keyExtractor}
          ListFooterComponent={_footerComponent}
        />
      </Block>
    </Block>
  );
};

export default ListItemNavProduct;
