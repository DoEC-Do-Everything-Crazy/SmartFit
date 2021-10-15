import {Block, Text} from '@components';
import {Image, Pressable} from 'react-native';

import {HeartPf} from '@assets/icons';
import {Rating} from 'react-native-ratings';
import React from 'react';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {width} from '@utils/responsive';

const ItemNavProduct = ({item, props}) => {
  const navigation = useNavigation();
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  return (
    <Pressable
      style={styles.press}
      onPress={() =>
        navigation.navigate(routes.FOOD_DETAILS_SCREEN, {id: item._id})
      }>
      <Block
        shadow
        width={width / 2 - 24}
        height={260}
        padding={5}
        borderRadius={8}
        marginHorizontal={8}
        marginVertical={8}
        space="between"
        backgroundColor={theme.colors.border}>
        <Block style={styles.icon}>
          <HeartPf color={theme.colors.red} />
        </Block>

        <Image
          style={styles.image}
          source={{
            uri: item.image[0],
          }}
        />
        <Block>
          <Block>
            <Text fontType="bold">{item.foodName}</Text>
            <Text size={10} numberOfLines={2}>
              {item.desc}
            </Text>
          </Block>
          <Rating
            style={styles.ratting}
            ratingCount={5}
            imageSize={15}
            type="custom"
            ratingColor="#FF7F50"
            ratingBackgroundColor="#c8c7c8"
            tintColor={theme.colors.border}
          />
          <Text size={12}>123 Reviewed</Text>
        </Block>
        <Text
          right
          size={18}
          paddingBottom={10}
          paddingRight={8}
          fontType="bold">
          {`$${item.lastPrice}`}
        </Text>
      </Block>
    </Pressable>
  );
};

export default ItemNavProduct;
