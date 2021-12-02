import {Block, Text} from '@components';
/* eslint-disable react-hooks/exhaustive-deps */
import {HeartPf, Layout} from '@assets/icons';
import {Image, Pressable} from 'react-native';
import React, {useCallback} from 'react';

import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {width} from 'utils/responsive';

const ItemHotFood = ({item, index, props}) => {
  const {
    theme: {theme: themeStore},
    cart: {wishList},
  } = useSelector(stateRoot => stateRoot.root);

  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const navigation = useNavigation();

  const handleOnPress = useCallback(() => {
    navigation.push(routes.FOOD_DETAILS_SCREEN, {id: item._id});
  }, []);

  return (
    <Pressable onPress={handleOnPress}>
      <Block
        key={index}
        marginLeft={index === 0 ? 16 : 0}
        marginTop={16}
        marginRight={16}>
        <Image style={styles.image} source={{uri: item.image[0]}} />
        <Block flex style={styles.shadow}>
          <Layout color={`${theme.colors.black}20`} width={width / 2 - 8} />
        </Block>
        <Block flex style={styles.layout}>
          <Layout color={theme.colors.white} width={width / 2 - 8} />
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
