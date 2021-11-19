import {Block, Text} from '@components';
import {Image, Pressable, TouchableOpacity} from 'react-native';

import {HeartPf} from '@assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {width} from '@utils/responsive';
import {foodApi} from 'api/foodApi';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';

const ItemPopular = ({item, props}) => {
  const navigation = useNavigation();
  const {
    theme: {theme: themeStore},
    cart: {wishList},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

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
        height={150}
        width={width / 2 - 20}
        marginHorizontal={8}
        borderRadius={8}
        marginVertical={8}
        space="between"
        backgroundColor={theme.colors.border}>
        <Image
          style={styles.image}
          source={{
            uri: item.image[0],
          }}
        />
        <Block style={styles.icon}>
          <HeartPf isActive={wishList.includes(item.key)} />
        </Block>
        <Block style={styles.text}>
          <Text center fontType="bold">
            {item.name}
          </Text>
        </Block>
        <Block row marginHorizontal={4} marginVertical={3} space="between">
          <Text fontType="bold" color="#FF7F50">{`$${item.lastPrice}`}</Text>

          {themeStore === 'dark' ? (
            <TouchableOpacity>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#70A2FF', '#54F0D1']}
                style={styles.button}>
                <Text color="white" fontType="bold">
                  +
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button}>
              <Text color="white" fontType="bold">
                +
              </Text>
            </TouchableOpacity>
          )}
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemPopular;
