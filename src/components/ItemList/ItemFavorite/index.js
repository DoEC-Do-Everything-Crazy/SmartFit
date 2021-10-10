import {images} from '@assets';
import {HeartPf} from '@assets/icons';
import {Block, Text} from '@components';
import {width} from '@utils/responsive';
import React, {useEffect, useState} from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemFavorite = ({picture, title, group_id, index, marginTop, props}) => {
  const [isTouch, setTouch] = useState(true);
  const [favoriteColor, setFavoriteColor] = useState();
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  useEffect(() => {
    isTouch
      ? setFavoriteColor(theme.colors.red)
      : setFavoriteColor(theme.colors.gray);
  }, [isTouch, theme.colors.gray, theme.colors.red]);
  return (
    <Block
      alignCenter
      marginTop={marginTop}
      width={(width - 48) / 2}
      marginRight={16}>
      <Block style={styles.content}>
        <Text size={22} marginTop={16} center fontType="bold">
          Veggie tomato mix
        </Text>
        <Text
          size={17}
          marginTop={20}
          color={theme.colors.inconInf}
          fontType="bold">
          $3.99
        </Text>
        <Pressable
          style={styles.iconHeart}
          onPress={() => {
            setTouch(!isTouch);
          }}>
          <HeartPf color={favoriteColor} />
        </Pressable>
      </Block>
      <Image source={images.food} style={styles.image} />
    </Block>
  );
};

export default ItemFavorite;
