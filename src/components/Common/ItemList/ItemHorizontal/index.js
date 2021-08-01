import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const ItemHorizontal = ({picture, title, group_id, index}) => {
  return (
    <Block
      key={index}
      style={index === 0 ? {marginLeft: 16} : {}}
      marginRight={16}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://diadiemnghean.com/wp-content/uploads/2020/05/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg',
        }}
      />
      <Block style={styles.title}>
        <Text color={theme.colors.white} fontType="bold">
          Menu
        </Text>
        <Text color={theme.colors.white}>Tiêu đề menu</Text>
      </Block>
    </Block>
  );
};

export default ItemHorizontal;
