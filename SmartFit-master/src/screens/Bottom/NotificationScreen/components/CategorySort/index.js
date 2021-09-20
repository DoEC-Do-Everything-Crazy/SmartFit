import {Block, Text} from '@components';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import styles from './styles';

const DATA = [
  {
    id: 1,
    title: 'All',
  },
  {
    id: 2,
    title: 'Coupon',
  },
  {
    id: 3,
    title: 'System',
  },
];

const CategorySort = () => {
  const [selectedId, setSelectedId] = useState(1);

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <Pressable onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.text, textColor]}>{item.title}</Text>
    </Pressable>
  );

  const _renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? 'white' : '#045694';
    const color = item.id === selectedId ? 'black' : 'white';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <Block row justifyContent="center">
      <Text style={[styles.text, styles.item]}>Sort by</Text>
      {DATA.map((item, i) => (
        <_renderItem key={i} item={item} />
      ))}
    </Block>
  );
};

export default CategorySort;
