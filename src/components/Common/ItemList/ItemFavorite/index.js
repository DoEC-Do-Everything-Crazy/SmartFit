import {icons, images} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const ItemFavorite = ({picture, title, group_id, index, marginTop}) => {
  return (
    <Block
      alignCenter
      marginTop={marginTop}
      width={(width - 48) / 2}
      marginRight={16}>
      <Block style={styles.content}>
        <Text size={22} marginTop={16} fontType="bold">
          Veggie tomato mix
        </Text>
        <Text
          size={17}
          marginTop={20}
          color={theme.colors.blue}
          fontType="bold">
          $3.99
        </Text>
        <Image
          resizeMode="contain"
          source={icons.iHeart}
          style={styles.iconHeart}
        />
      </Block>
      <Image source={images.food} style={styles.image} />
    </Block>
  );
};

export default ItemFavorite;
