import React, {useEffect, useState} from 'react';

import {Block} from '@components';
import Carousel from 'react-native-snap-carousel';
import ItemNavProduct from '@components/ItemList/ItemNavProduct';
import {foodApi} from 'api/foodApi';
import {keyExtractor} from 'utils/keyExtractor';
import {width} from '@utils/responsive';

const ListItemNavProduct = () => {
  const [foods, setFoods] = useState([]);

  const getProduct = async () => {
    try {
      const data = await foodApi.getFoods();
      setFoods(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  const _renderItem = ({item, index}) => {
    return <ItemNavProduct item={item} />;
  };

  return (
    <Block marginHorizontal={8} paddingBottom={15} paddingTop={20}>
      <Block alignCenter marginTop={16}>
        <Carousel
          loop
          sliderWidth={width}
          sliderHeight={width}
          itemWidth={width / 2}
          data={foods}
          hasParallaxImages={true}
          renderItem={_renderItem}
          keyExtractor={keyExtractor}
        />
      </Block>
    </Block>
  );
};

export default ListItemNavProduct;
