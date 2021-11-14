import {Block, Text} from '@components';
import React, {useEffect, useState} from 'react';

import {FlatList} from 'react-native';
import ItemPopular from '@components/ItemList/ItemPopular';
import {foodApi} from 'api/foodApi';
import {useTranslation} from 'react-i18next';

const ListItemPopular = props => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        data={props.foodsBMI ? props.foodsBMI : foods}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListItemPopular;
