/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';

import {Block} from '@components';
import Carousel from 'react-native-snap-carousel';
import ItemNavProduct from '@components/ItemList/ItemNavProduct';
import {foodApi} from 'api/foodApi';
import {keyExtractor} from 'utils/keyExtractor';
import {width} from '@utils/responsive';

const ListItemNavProduct = ({...props}) => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const initData = async () => {
    try {
      const response = await foodApi.getFoods({
        pageNumber,
        orderBy: 'rate',
        active: true,
      });

      const {foods} = response;

      setData(foods);
      setPageNumber(pageNumber + 1);
    } catch (e) {
      console.error(e.message);
    }
  };

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
        />
      </Block>
    </Block>
  );
};

export default ListItemNavProduct;
