import {icons} from '@assets';
import {Block, Text} from '@components';
import {width} from '@utils/responsive';
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Image, Pressable} from 'react-native';
import {Rating} from 'react-native-ratings';
import {routes} from '@navigation/routes';
import {theme} from '@theme';
import styles from './styles';
import {HeartPf} from '@assets/icons';

const ItemNavProduct = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.press}
      onPress={() => navigation.navigate(routes.FOOD_DETAILS_SCREEN)}>
      <Block
        shadow
        width={width / 2 - 24}
        height={260}
        padding={5}
        borderRadius={8}
        marginHorizontal={8}
        marginVertical={8}
        space="between"
        backgroundColor={theme.colors.white}>
        <Block style={styles.icon}>
          <HeartPf color={theme.colors.red} />
        </Block>

        <Image
          style={styles.image}
          source={{
            uri: 'https://img-global.cpcdn.com/recipes/7ebf84f0d5977606/680x482cq70/healthy-food-chu%E1%BB%97i-series-gi%E1%BA%A3m-can-recipe-main-photo.jpg',
          }}
        />
        <Block>
          <Block>
            <Text fontType="bold">Mixed</Text>
            <Text size={10} fontType="bold">
              They were previously demonized for being high in cholesterol
            </Text>
          </Block>
          <Rating
            style={styles.ratting}
            ratingCount={5}
            imageSize={15}
            type="custom"
            ratingColor="#FF7F50"
            ratingBackgroundColor="#c8c7c8"
            tintColor={theme.colors.white}
          />
          <Text size={12}>123 Reviewed</Text>
        </Block>
        <Text
          right
          size={18}
          paddingBottom={10}
          paddingRight={8}
          fontType="bold">
          $3.39
        </Text>
      </Block>
    </Pressable>
  );
};

export default ItemNavProduct;
