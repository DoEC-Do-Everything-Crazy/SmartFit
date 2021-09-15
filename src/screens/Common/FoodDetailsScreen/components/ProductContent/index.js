import {icons, images} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image} from 'react-native';
import {Rating} from 'react-native-ratings';
import ItemStats from '../ItemStats';
import styles from './styles';

const ProductContent = ({data}) => {
  const _renderItem = item => (
    <ItemStats title={item.title} stats={item.stats} />
  );
  return (
    <Block row alignCenter space="between">
      <Block alignCenter justifyCenter width="40%">
        {data.map(_renderItem)}
        <Block alignCenter marginTop={10} marginBottom={20}>
          <Image
            resizeMode="contain"
            source={icons.iHeart}
            style={styles.iconHeart}
          />
          <Text size={16}>Favorite</Text>
        </Block>
      </Block>
      <Block
        width="60%"
        style={styles.linearGradient}
        backgroundColor={theme.colors.white}>
        <Text
          center
          size={22}
          marginTop={20}
          fontType="bold"
          marginHorizontal={16}>
          Mixed Vegetables
        </Text>
        <Block flex alignCenter justifyCenter>
          <Image source={images.food} style={styles.image} />
          <Rating
            type="custom"
            ratingColor="#FF7F50"
            ratingCount={5}
            imageSize={24}
            tintColor={theme.colors.white}
            ratingBackgroundColor={theme.colors.lightGray}
          />
          <Text size={32} marginTop={5} fontType="bold">
            $ 3,99
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default ProductContent;
