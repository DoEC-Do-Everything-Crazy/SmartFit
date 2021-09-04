import {Block, Text} from '@components';
import {theme} from '@theme';
import React, {useState} from 'react';
import {FlatList, Pressable} from 'react-native';
import styles from './styles';

const Item = ({name, onPress, backgroundColor, color, fontType}) => {
  return (
    <Pressable
      style={[{backgroundColor: backgroundColor}, styles.press]}
      onPress={onPress}>
      <Text color={color} fontType={fontType}>
        {name}
      </Text>
    </Pressable>
  );
};

const BlockBox = ({category, data}) => {
  const [selectedId, setSelectedId] = useState(null);
  const a = item => {
    setSelectedId(item.id);
    item.check = !item.check;
    if (item.check) {
      console.log(item.name);
    } else {
      console.log(item.name + 'cliecked');
    }
  };

  const _renderItem = ({item}) => {
    const backgroundColor = item.check ? '#40BFFF1A' : theme.colors.white;
    const color = item.check ? theme.colors.blue : theme.colors.gray;
    const fontType = item.check ? 'bold' : 'normal';

    return (
      <Item
        onPress={() => {
          a(item);
        }}
        backgroundColor={backgroundColor}
        name={item.name}
        color={color}
        fontType={fontType}
      />
    );
  };
  return (
    <Block marginHorizontal={8} marginTop={20}>
      <Text
        size={16}
        marginLeft={8}
        marginBottom={8}
        color={theme.colors.blue}
        fontType="bold">
        {category}
      </Text>
      <FlatList
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        data={data}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </Block>
  );
};

export default BlockBox;
