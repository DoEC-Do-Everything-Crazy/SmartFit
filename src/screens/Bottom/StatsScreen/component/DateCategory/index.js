import React, {useState} from 'react';
import {ScrollView, Pressable, FlatList} from 'react-native';
import {Block, Text} from '@components';
import styles from './styles';

const data = [
  {
    id: 1,
    title: 'Daily',
  },
  {
    id: 2,
    title: 'Weekly',
  },
  {
    id: 3,
    title: 'Monthly',
  },
  {
    id: 4,
    title: 'Yearly',
  },
];
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <Pressable onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.text, textColor]}>{item.title}</Text>
  </Pressable>
);

const DateCategory = () => {
  const [selectedId, setSelectedId] = useState(1);
  const _renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#045694' : 'white';
    const color = item.id === selectedId ? 'white' : 'black';
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
    <Block>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, i) => (
          <_renderItem key={i} item={item} />
        ))}
      </ScrollView>
    </Block>
  );
};

export default DateCategory;
