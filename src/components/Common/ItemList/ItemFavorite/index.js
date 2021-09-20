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
      radius={8}
      width={(width - 48) / 2}
      height={260}
      padding={16}
      marginBottom={16}
      marginRight={16}
      backgroundColor={theme.colors.white}>
      <Image source={images.favorite} style={styles.image} />
      <Block alignCenter justifyCenter>
        <Text size={22} marginTop={12} fontType="bold">
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
    </Block>
  );
};

export default ItemFavorite;
