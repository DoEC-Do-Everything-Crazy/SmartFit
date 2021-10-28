import {Block, Text} from '@components';
import {Image, Pressable} from 'react-native';

import React from 'react';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemCart = ({item, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  return (
    <Pressable>
      <Block
        justifyCenter
        height={100}
        borderRadius={20}
        marginHorizontal={16}
        marginVertical={5}
        backgroundColor={theme.colors.border}>
        <Block row alignCenter marginHorizontal={16}>
          <Image style={styles.image} source={{uri: item.image[0]}} />
          <Block marginHorizontal={16}>
            <Text fontType="bold">{item.name}</Text>
            <Text marginTop={8} color={theme.colors.inconInf} fontType="bold">
              {item.lastPrice}
            </Text>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemCart;
