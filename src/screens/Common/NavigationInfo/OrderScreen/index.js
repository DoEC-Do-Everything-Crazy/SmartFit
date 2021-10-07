import {Block, Header, Text} from '@components';
import ItemOrder from '@components/ItemList/ItemOrder';

import React, {useState} from 'react';
import {FlatList, Pressable, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {DATA_HEADER} from '@constants/';

const OrderScreen = props => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const _renderItem = (item, index) => <ItemOrder index={index} />;
  const [selectedId, setSelectedId] = useState(1);
  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <Pressable onPress={onPress} style={[styles.itemHeader, backgroundColor]}>
      <Text style={[styles.text, textColor]}>{item.title}</Text>
    </Pressable>
  );
  const _renderItemHeader = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#045694' : 'transparent';
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
    <Block flex marginBottom={16} backgroundColor={theme.colors.background}>
      <Header canGoBack title="Order" colorTheme={theme.colors.black} />
      <Block
        flex
        paddingHorizontal={16}
        backgroundColor={theme.colors.background}>
        <ScrollView
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          justifyContent="center"
          alignItems="center">
          {DATA_HEADER.map((item, i) => (
            <_renderItemHeader key={i} item={item} />
          ))}
        </ScrollView>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={_renderItem}
          keyExtractor={item => item.item_id}
        />
      </Block>
    </Block>
  );
};

export default OrderScreen;
