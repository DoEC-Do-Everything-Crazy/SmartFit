import {Block, Text} from '@components';
import {Image, Pressable} from 'react-native';

import React from 'react';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';

const ItemSearch = ({item, props, onPress}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);

  return (
    <Pressable key={item.key} onPress={onPress} style={styles.container}>
      <Block row alignCenter width="85%">
        <Block shadow alignCenter justifyCenter radius={8}>
          <Image source={{uri: item.image[0]}} style={styles.imageSearch} />
        </Block>
        <Block row space="between">
          <Block flex marginHorizontal={16}>
            <Text numberOfLines={1} size={16} fontType="bold">
              {item.name}
            </Text>
            <Text numberOfLines={1}>{item.description}</Text>
          </Block>
          <Block>
            <Text size={16}>{`$${item.lastPrice}`}</Text>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemSearch;
