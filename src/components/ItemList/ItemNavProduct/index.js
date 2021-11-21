import {Block, Text} from '@components';
import {Image, Pressable} from 'react-native';

import {HeartPf} from '@assets/icons';
import {Rating} from 'react-native-ratings';
import React from 'react';
import {foodApi} from 'api/foodApi';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';
import {width} from '@utils/responsive';

const ItemNavProduct = ({item, props}) => {
  const navigation = useNavigation();
  const {
    theme: {theme: themeStore},
    cart: {wishList},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const {t} = useTranslation();

  const updateViewFood = async item => {
    await foodApi.updateViewFood(item, {
      validateStatus: false,
    });
  };

  return (
    <Pressable
      style={styles.press}
      onPress={() => {
        navigation.navigate(routes.FOOD_DETAILS_SCREEN, {id: item._id});
        updateViewFood(item._id);
      }}>
      <Block
        shadow
        width={width / 2 - 20}
        height={260}
        borderRadius={8}
        marginHorizontal={8}
        marginVertical={8}
        space="between"
        backgroundColor={theme.colors.border}>
        <Block style={styles.icon}>
          <HeartPf
            isActive={wishList.includes(item.key)}
            activeColor={theme.colors.red}
            deActiveColor={theme.colors.gray}
          />
        </Block>

        <Image
          style={styles.image}
          source={{
            uri: item.image[0],
          }}
        />
        <Block paddingHorizontal={8}>
          <Block>
            <Text size={17} fontType="bold">
              {item.name}
            </Text>
            <Text size={12} numberOfLines={2}>
              {item.description}
            </Text>
          </Block>
          <Rating
            style={styles.rating}
            ratingCount={5}
            readonly={true}
            startingValue={item.averageRating}
            imageSize={15}
            type="custom"
            ratingColor="#FF7F50"
            ratingBackgroundColor="#c8c7c8"
            tintColor={theme.colors.border}
          />
          <Text size={12}>
            {item.totalReviews} {t('review')}
          </Text>
        </Block>
        <Text
          right
          size={18}
          paddingBottom={10}
          paddingHorizontal={8}
          fontType="bold"
          color="#FF7F50">
          {`$${item.lastPrice}`}
        </Text>
      </Block>
    </Pressable>
  );
};

export default ItemNavProduct;
