import {HeartPf} from '@assets/icons';
import {Block, Text} from '@components';
import {width} from '@utils/responsive';
import React, {useEffect, useState} from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useStyles} from './styles';
import {useNavigation} from '@react-navigation/core';
import {useTheme} from '@theme';
import {routes} from '@navigation/routes';
import {addWishListItem, removeWishListItem} from 'reduxs/reducers';

const ItemFavorite = ({item, marginTop, props}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    theme: {theme: themeStore},
    cart: {wishList},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const [isTouch, setTouch] = useState(true);
  const [favoriteColor, setFavoriteColor] = useState(null);

  const handleNavigate = () => {
    console.log('key ' + item.key);
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
    setTouch(!isTouch);
    if (wishList.includes(item.key)) {
      dispatch(removeWishListItem(item.key));
    } else {
      dispatch(addWishListItem(item.key));
    }
  };

  useEffect(() => {
    isTouch
      ? setFavoriteColor(theme.colors.red)
      : setFavoriteColor(theme.colors.gray);
  }, [isTouch]);
  return (
    <Block
      alignCenter
      marginTop={marginTop}
      width={(width - 48) / 2}
      marginRight={16}>
      <Pressable onPress={handleNavigate} style={styles.content}>
        <Text size={22} marginTop={16} center fontType="bold">
          {item.name}
        </Text>
        <Text size={15} marginTop={5} center>
          {item.description}
        </Text>
        <Text
          size={17}
          marginTop={20}
          color={theme.colors.inconInf}
          fontType="bold">
          ${item.lastPrice}
        </Text>
        <Pressable style={styles.iconHeart} onPress={handleFavorite}>
          <HeartPf isActive={true} activeColor={favoriteColor} />
        </Pressable>
      </Pressable>
      <Image source={{uri: item.image[0]}} style={styles.image} />
    </Block>
  );
};

export default ItemFavorite;
