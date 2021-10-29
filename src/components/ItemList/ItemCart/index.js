import {Block, Text} from '@components';
import {Image, Pressable} from 'react-native';
import React, {useCallback, useState} from 'react';
import {decreaseCartItem, increaseCartItem} from 'reduxs/reducers';
import {useDispatch, useSelector} from 'react-redux';

import LinearGradient from 'react-native-linear-gradient';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemCart = ({item, props}) => {
  const dispatch = useDispatch();
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const handleSub = () => {
    dispatch(decreaseCartItem({key: item.key}));
  };

  const handleSum = () => {
    dispatch(increaseCartItem({key: item.key}));
  };

  return (
    <Pressable>
      <Block
        justifyCenter
        height={100}
        borderRadius={20}
        marginHorizontal={16}
        marginVertical={5}
        backgroundColor={theme.colors.border}>
        <Block row alignCenter marginHorizontal={16}>
          <Image style={styles.image} source={{uri: item.image[0]}} />
          <Block flex marginHorizontal={16}>
            <Text size={18} fontType="bold">
              {item.name}
            </Text>
            <Block flex justifyCenter alignCenter row space="between">
              <Text color={theme.colors.inconInf}>{item.lastPrice}</Text>
              <Block row justifyCenter alignCenter marginRight={10}>
                <Pressable onPress={handleSub}>
                  {themeStore === 'dark' ? (
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={['#70A2FF', '#54F0D1']}
                      style={styles.item}>
                      <Text style={styles.text}>-</Text>
                    </LinearGradient>
                  ) : (
                    <Block style={[styles.item, {backgroundColor: '#045694'}]}>
                      <Text center size={10} style={styles.text}>
                        -
                      </Text>
                    </Block>
                  )}
                </Pressable>
                <Block justifyCenter alignCenter marginHorizontal={15}>
                  <Text fontType="bold" size={15} center>
                    {item.quantity}
                  </Text>
                </Block>
                <Pressable onPress={handleSum}>
                  {themeStore === 'dark' ? (
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={['#70A2FF', '#54F0D1']}
                      style={styles.item}>
                      <Text style={styles.text}>+</Text>
                    </LinearGradient>
                  ) : (
                    <Block style={[styles.item, {backgroundColor: '#045694'}]}>
                      <Text center size={10} style={styles.text}>
                        +
                      </Text>
                    </Block>
                  )}
                </Pressable>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemCart;
