import React, {useEffect, useState} from 'react';

import {Block} from '@components';
import {width} from '@utils/responsive';
import ItemNavProduct from '@components/ItemList/ItemNavProduct';
import {apiUrl} from '@config/api';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';

const ListItemNavProduct = () => {
  const [foods, setFoods] = useState([]);

  const getProduct = async () => {
    await axios
      .get(`${apiUrl}/food`, {
        validateStatus: false,
      })
      .then(response => {
        if (response.status === 200) {
          setFoods(response.data);
          return;
        }

        if (response.status === 404 || response.status === 500) {
          console.error(response.data.message);
        }
      })
      .error(error => {
        console.error('Internal server error');
      });
  };
  useEffect(() => {
    getProduct();
  }, []);

  const _renderItem = ({item, index}) => (
    <ItemNavProduct item={item} key={index} />
  );

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
        />
      </Block>
    </Block>
  );
};

export default ListItemNavProduct;
