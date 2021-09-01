import {Block} from '@components';
import ItemNavProduct from '@components/Common/ItemList/ItemNavProduct';
import React from 'react';
import {FlatList} from 'react-native';

const data = [
  {
    id: 1,
    title: 'Healthy',
    content:
      'This is content 1 This is content 1 This is content 1 This is content 1 This is content 1 This is content 1',
    date: '14-08-2021',
  },
  {
    id: 2,
    title: 'Healthy 1',
    content:
      'This is content 2 This is content 2 This is content 2 This is content 2 This is content 2 This is content 2',
    date: '14-08-2021',
  },
  {
    id: 3,
    title: 'Healthy 2',
    content:
      'This is content 3 This is content 3 This is content 3 This is content 3 This is content 3',
    date: '14-08-2021',
  },
  {
    id: 4,
    title: 'Healthy 3',
    content:
      'This is content 3 This is content 3 This is content 3 This is content 3 This is content 3',
    date: '14-08-2021',
  },
];
const ListItemNavProduct = () => {
  const _renderItem = ({item}) => (
    <ItemNavProduct
      backgroundColor={item.id % 2 == 0 ? '#D9FFDF' : '#B0EFEF'}
      backgroundRating={item.id % 2 == 0 ? '#D9FFDF' : '#B0EFEF'}
    />
  );
  return (
    <Block marginHorizontal={8} marginVertical={15}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        keyExtractor={item => item.id}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListItemNavProduct;
