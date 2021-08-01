import {Block, Text} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const ItemVertical = ({picture, title, group_id, index}) => {
  return (
    <Block key={index} paddingHorizontal={16} marginTop={16}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://diadiemnghean.com/wp-content/uploads/2020/05/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg',
        }}
      />
      <Block style={styles.title}>
        <Text size={20} color={theme.colors.white} fontType="bold">
          Course name
        </Text>
      </Block>
    </Block>
  );
};

export default ItemVertical;
