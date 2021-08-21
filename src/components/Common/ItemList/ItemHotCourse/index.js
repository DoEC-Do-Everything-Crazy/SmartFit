import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const ItemHotCourse = ({picture, title, group_id, index}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(routes.DETAILS_COURSE_SCREEN)}>
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
    </Pressable>
  );
};

export default ItemHotCourse;
