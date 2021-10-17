import {Block, Text} from '@components';
import React, {useState} from 'react';
import {Pressable, ScrollView} from 'react-native';

import {DATA_STATS} from '@constants/';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

const DateCategory = props => {
  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);
  const [selectedId, setSelectedId] = useState(1);
  const _renderItem = ({item}) => {
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
