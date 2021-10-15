import React, {useEffect, useState} from 'react';

import {Block} from '@components';
import {FlatList} from 'react-native';
import ItemNavProduct from '@components/ItemList/ItemNavProduct';
import {apiUrl} from '@config/api';
import axios from 'axios';

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
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={foods}
        keyExtractor={item => item.id}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListItemNavProduct;
