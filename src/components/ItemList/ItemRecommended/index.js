import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const ItemRecommended = ({_id, title, desc, image, index}) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(routes.FOOD_DETAILS_SCREEN)}>
      <Block
        key={index}
        style={{marginLeft: index === 0 ? 16 : 0}}
        marginRight={16}>
        <Image style={styles.image} source={{uri: image}} />
        <Block style={styles.title}>
          <Text color={theme.colors.white} fontType="bold">
            {title}
          </Text>
          <Text color={theme.colors.white}>{desc}</Text>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemRecommended;
