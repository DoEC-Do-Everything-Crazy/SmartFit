import {Alert, Image, Pressable} from 'react-native';
import {Block, Text} from '@components';
import React, {useEffect, useState} from 'react';

import {HeartPf} from '@assets/icons';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemHotProduct = ({item, index, props}) => {
  const [isTouch, setTouch] = useState(true);
  const [color, setColor] = useState();
  const {
    theme: {theme: themeStore},
    cart: {wishList},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const navigation = useNavigation();
  useEffect(() => {
    isTouch ? setColor(theme.colors.red) : setColor(theme.colors.gray);
  }, [isTouch, theme.colors.gray, theme.colors.red]);

  return (
    <Pressable
      key={index}
      onPress={() =>
        navigation.navigate(routes.PRODUCT_DETAIL_SCREEN, {id: item._id})
      }>
      <Block style={{marginLeft: index === 0 ? 16 : 0}} marginRight={16}>
        <Image style={styles.image} source={{uri: item.image[0]}} />
        <Pressable
          style={styles.iconHeart}
          onPress={() => {
            setTouch(!isTouch);
          }}>
          <HeartPf isActive={wishList.includes(item.key)} />
        </Pressable>
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
