import {Block, Text} from '@components';
import React, {useEffect, useState} from 'react';

import {FlatList} from 'react-native';
import ItemPopular from '@components/ItemList/ItemPopular';
import {apiUrl} from '@config/api';
import axios from 'axios';

const ListItemPopular = () => {
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
    <ItemPopular item={item} key={index} />
  );

  return (
    <Block flex>
      <Block row marginHorizontal={16} marginBottom={10} space="between">
        <Text fontType="bold" size={18}>
          Popular Items
        </Text>
        <Text size={16}>Show all {'>'} </Text>
      </Block>
      <FlatList
        contentContainerStyle={{alignSelf: 'center'}}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        data={foods}
        numColumns={3}
        keyExtractor={item => item.id}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListItemPopular;
