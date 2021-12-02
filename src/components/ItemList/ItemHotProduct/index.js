/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Text} from '@components';
import {Image, Pressable} from 'react-native';
import React, {useCallback} from 'react';

import {HeartPf} from '@assets/icons';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemHotProduct = ({item, index, props}) => {
  const navigation = useNavigation();
  const {
    theme: {theme: themeStore},
    cart: {wishList},
  } = useSelector(stateRoot => stateRoot.root);

  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const handleOnPress = useCallback(() => {
    navigation.push(routes.PRODUCT_DETAIL_SCREEN, {id: item._id});
  }, []);

  return (
    <Pressable key={index} onPress={handleOnPress}>
      <Block
        style={{marginLeft: index === 0 ? 16 : 0, marginTop: 16}}
        marginRight={16}>
        <Image style={styles.image} source={{uri: item.image[0]}} />
        <Block style={styles.iconHeart}>
          <HeartPf isActive={wishList.includes(item.key)} />
        </Block>
        <Block style={styles.title}>
          <Text color={theme.colors.white} numberOfLines={1} fontType="bold">
            {item.name}
          </Text>
          <Text color={theme.colors.white} numberOfLines={1}>
            {item.description}
          </Text>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemHotProduct;
