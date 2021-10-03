import {Block, Text} from '@components';
import React, {useState} from 'react';
import {Pressable, ScrollView} from 'react-native';
import styles from './styles';
import {DATA_STATS} from '@constants/';

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
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        justifyContent="center">
        {DATA_STATS.map((item, i) => (
          <_renderItem key={i} item={item} />
        ))}
      </ScrollView>
    </Block>
  );
};

export default DateCategory;
