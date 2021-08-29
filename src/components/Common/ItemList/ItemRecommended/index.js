import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const ItemRecommended = ({picture, title, group_id, index}) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(routes.FOOD_DETAILS_SCREEN)}>
      <Block
        key={index}
        style={{marginLeft: index === 0 ? 16 : 0}}
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
    </Pressable>
  );
};

export default ItemRecommended;
