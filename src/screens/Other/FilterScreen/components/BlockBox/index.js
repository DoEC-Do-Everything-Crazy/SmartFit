import {Block, Text} from '@components';
import React, {useState} from 'react';
import {FlatList, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import LinearGradient from 'react-native-linear-gradient';

const BlockBox = ({category, data, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

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

  const Item = ({name, onPress, backgroundColor, color, fontType}) => {
    return (
      <Pressable onPress={onPress}>
        {themeStore === 'dark' ? (
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={backgroundColor}
            style={styles.press}>
            <Text style={[styles.text, color, fontType]}>{name}</Text>
          </LinearGradient>
        ) : (
          <Block style={[styles.press, backgroundColor]}>
            <Text color={color} fontType={fontType}>
              {name}
            </Text>
          </Block>
        )}
      </Pressable>
    );
  };
  const _renderItem = ({item}) => {
    const backgroundColor =
      themeStore === 'light'
        ? item.check
          ? '#40BFFF1A'
          : theme.colors.white
        : item.check
        ? ['#70A2FF', '#54F0D1']
        : ['#181E25', '#181E25'];
    const color = item.check ? theme.colors.blue : theme.colors.gray;
    const fontType = item.check ? 'bold' : 'normal';

    return (
      <Item
        onPress={() => {
          a(item);
        }}
        backgroundColor={
          themeStore === 'dark' ? backgroundColor : {backgroundColor}
        }
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
        color={theme.colors.iconInf}
        fontType="bold">
        {category}
      </Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </Block>
  );
};

export default BlockBox;
