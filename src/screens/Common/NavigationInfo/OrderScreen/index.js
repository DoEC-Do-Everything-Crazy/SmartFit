import {Block, Header, Text} from '@components';
import ItemOrder from '@components/ItemList/ItemOrder';

import React, {useState} from 'react';
import {FlatList, Pressable, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {DATA_HEADER} from '@constants/';
import LinearGradient from 'react-native-linear-gradient';

const OrderScreen = props => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const _renderItem = (item, index) => <ItemOrder index={index} />;
  const [selectedId, setSelectedId] = useState(1);
  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <Pressable onPress={onPress}>
      {themeStore === 'dark' ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={backgroundColor}
          style={styles.item}>
          <Text style={[styles.text, textColor]}>{item.title}</Text>
        </LinearGradient>
      ) : (
        <Block style={[styles.item, backgroundColor]}>
          <Text style={[styles.text, textColor]}>{item.title}</Text>
        </Block>
      )}
    </Pressable>
  );

  const _renderItemHeader = ({item}) => {
    const backgroundColor =
      themeStore === 'light'
        ? item.id === selectedId
          ? 'white'
          : '#045694'
        : item.id === selectedId
        ? ['#70A2FF', '#54F0D1']
        : ['#181E25', '#181E25'];
    const color =
      themeStore === 'dark'
        ? 'white'
        : item.id === selectedId
        ? 'black'
        : 'white';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={
          themeStore === 'dark' ? backgroundColor : {backgroundColor}
        }
        textColor={{color}}
      />
    );
  };
  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Header canGoBack title="Order" colorTheme={theme.colors.black} />
      <Block
        flex
        paddingHorizontal={16}
        backgroundColor={theme.colors.backgroundSetting}>
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
