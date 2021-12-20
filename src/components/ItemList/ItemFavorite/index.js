import {Block, Text} from '@components';
import {Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addWishListItem, removeWishListItem} from 'reduxs/reducers';
import {useDispatch, useSelector} from 'react-redux';

/* eslint-disable react-hooks/exhaustive-deps */
import {HeartPf} from '@assets/icons';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {width} from '@utils/responsive';

const ItemFavorite = ({item, marginTop, onFavoriteClick, props}) => {
  const navigation = useNavigation();
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const [favoriteColor, setFavoriteColor] = useState(null);

  const handleNavigate = () => {
    if (item.key.includes('C')) {
      navigation.navigate(routes.TAB_DETAILS, {id: item._id});
      return;
    }
    if (item.key.includes('F')) {
      navigation.navigate(routes.FOOD_DETAILS_SCREEN, {id: item._id});
      return;
    }
    if (item.key.includes('P')) {
      navigation.navigate(routes.PRODUCT_DETAIL_SCREEN, {id: item._id});
      return;
    }
  };

  const handleFavorite = () => {
    onFavoriteClick(item);
  };

  useEffect(() => {
    item.touched
      ? setFavoriteColor(theme.colors.red)
      : setFavoriteColor(theme.colors.gray);
  }, [item.touched]);

  return (
    <Pressable onPress={handleNavigate}>
      <Block
        alignCenter
        marginTop={marginTop}
        width={(width - 48) / 2}
        marginRight={16}>
        <Block style={styles.content}>
          <Text
            size={22}
            marginTop={16}
            center
            fontType="bold"
            numberOfLines={1}>
            {item.name}
          </Text>
          <Text size={15} marginTop={5} center numberOfLines={1}>
            {item.description}
          </Text>
          <Text
            size={17}
            marginTop={20}
            color={theme.colors.inconInf}
            fontType="bold">
            {`$${item.lastPrice}`} {item.key}
          </Text>
          <Pressable style={styles.iconHeart} onPress={handleFavorite}>
            <HeartPf isActive={item.touched} activeColor={favoriteColor} />
          </Pressable>
        </Block>
        <Image source={{uri: item.image[0]}} style={styles.image} />
      </Block>
    </Pressable>
  );
};

export default ItemFavorite;
