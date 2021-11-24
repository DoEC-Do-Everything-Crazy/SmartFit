import {Block, Text} from '@components';
import {HeartPf, Layout} from '@assets/icons';
import {Image, Pressable} from 'react-native';

import React from 'react';
import {foodApi} from 'api/foodApi';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemHotFood = ({item, index, props}) => {
  const {
    theme: {theme: themeStore},
    cart: {wishList},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const navigation = useNavigation();

  const updateViewFood = async item => {
    await foodApi.updateViewFood(item, {
      validateStatus: false,
    });
  };

  return (
    <Pressable
      onPress={() => {
        navigation.navigate(routes.FOOD_DETAILS_SCREEN, {id: item._id});
        updateViewFood(item._id);
      }}>
      <Block
        key={index}
        style={{marginLeft: index === 0 ? 16 : 0}}
        marginRight={16}>
        <Image style={styles.image} source={{uri: item.image[0]}} />
        <Block flex style={styles.shadow}>
          <Layout color={`${theme.colors.black}20`} />
        </Block>
        <Block flex style={styles.layout}>
          <Layout color={theme.colors.white} />
        </Block>
        <Block row flex>
          <Block shadow style={styles.icon}>
            <HeartPf
              isActive={wishList.includes(item.key)}
              activeColor={theme.colors.red}
              deActiveColor={theme.colors.gray}
            />
          </Block>
          <Block column style={styles.title}>
            <Text numberOfLines={1} color={theme.colors.black} fontType="bold">
              {item.name}
            </Text>
            <Text numberOfLines={1} color={theme.colors.black}>
              {item.description}
            </Text>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemHotFood;
