import {Block, Text} from '@components';
import React, {useEffect, useState} from 'react';

import {FlatList} from 'react-native';
import ItemPopular from '@components/ItemList/ItemPopular';
import {foodApi} from 'api/foodApi';
import {keyExtractor} from 'utils/keyExtractor';
import {useTranslation} from 'react-i18next';

const ListItemPopular = () => {
  const [foods, setFoods] = useState([]);
  const {t} = useTranslation();

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

  const _renderItem = ({item, index}) => (
    <ItemPopular item={item} key={index} />
  );

  return (
    <Block flex>
      <Block row marginHorizontal={16} marginBottom={10} space="between">
        <Text fontType="bold" size={18}>
          {t('menu')}
        </Text>
      </Block>
      <FlatList
        contentContainerStyle={{alignSelf: 'center'}}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        data={foods}
        numColumns={2}
        keyExtractor={keyExtractor}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListItemPopular;
