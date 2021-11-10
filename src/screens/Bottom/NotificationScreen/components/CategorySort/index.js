import {Block, Text} from '@components';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {useTranslation} from 'react-i18next';

const CategorySort = props => {
  const [selectedId, setSelectedId] = useState(1);

  const themeStore = useSelector(state => state.root.theme.theme);
  const styles = useStyles(props, themeStore);
  const {t} = useTranslation();

  const DATA_TYPE_NOTIFICATION = [
    {
      id: 1,
      title: t('promotion'),
    },
  ];
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
    <Block row justifyContent="center">
      {DATA_TYPE_NOTIFICATION.map((item, i) => (
        <_renderItem key={i} item={item} />
      ))}
    </Block>
  );
};

export default CategorySort;
