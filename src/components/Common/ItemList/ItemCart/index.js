import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const ItemCart = ({title, image, price}) => {
  return (
    <Pressable
      onPress={() => {
        console.log('aa');
      }}>
      <Block
        width={320}
        height={100}
        backgroundColor={theme.colors.white}
        marginVertical={5}
        borderRadius={20}
        justifyCenter>
        <Block row alignCenter marginHorizontal={8}>
          <Image style={styles.image} source={{uri: image}} />
          <Block marginHorizontal={8}>
            <Text fontType="bold">{title}</Text>
            <Text marginTop={8} color={theme.colors.blue} fontType="bold">
              {price}
            </Text>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemCart;
