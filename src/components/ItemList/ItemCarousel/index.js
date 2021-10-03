import {icons, images} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import {width} from '@utils/responsive';
import {Rating} from 'react-native-ratings';

const ItemCarousel = ({picture, title, group_id, index}) => {
  return (
    <Block
      justifyCenter
      radius={8}
      width={(width - 48) / 2}
      marginRight={16}
      paddingBottom={16}
      marginBottom={16}
      backgroundColor={theme.colors.white}>
      <Image source={images.image} style={styles.image} />
      <Block shadow style={styles.heartContainer}>
        <Image
          resizeMode="contain"
          source={icons.iHeart}
          style={styles.iconHeart}
        />
      </Block>
      <Block paddingHorizontal={16}>
        <Block row alignCenter marginTop={10}>
          <Rating
            type="custom"
            ratingCount={5}
            imageSize={18}
            tintColor={theme.colors.white}
            ratingBackgroundColor={theme.colors.lightGray}
          />
          <Text size={14} color={theme.colors.gray}>
            (3)
          </Text>
        </Block>
        <Text size={11} marginTop={8}>
          Mango
        </Text>
        <Text size={16} marginTop={8} fontType="bold">
          T-Shirt SPANISH
        </Text>
        <Text size={14} marginTop={8} fontType="bold">
          9$
        </Text>
      </Block>
    </Block>
  );
};

export default ItemCarousel;
