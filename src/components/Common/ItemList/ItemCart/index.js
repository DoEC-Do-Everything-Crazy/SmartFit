import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import Swipeout from 'react-native-swipeout';

const ItemCart = ({title, image, price, id}) => {
  const swipeoutBtns = [
    {
      component: (
        <Pressable
          onPress={() => console.log('press update')}
          style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Image source={icons.addToCart} />
        </Pressable>
      ),
      backgroundColor: '#ff0000',
      underlayColor: 'red',
    },
    {
      component: (
        <Pressable
          onPress={() => console.log('press delete')}
          style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
          <Image source={icons.addToCart} />
        </Pressable>
      ),
      backgroundColor: '#ff0',
    },
  ];
  return (
    <Swipeout
      style={{
        alignItems: 'center',
      }}
      right={swipeoutBtns}
      onOpen={() => {
        console.log('open SwipeOut ' + id);
      }}
      backgroundColor="transparent">
      <Pressable
        onPress={() => {
          console.log('aa');
        }}>
        <Block
          width={300}
          height={100}
          backgroundColor={theme.colors.white}
          marginVertical={5}
          borderRadius={20}
          marginHorizontal={10}
          justifyCenter>
          <Block row alignCenter marginHorizontal={8}>
            <Image
              style={{
                width: 50,
                height: 50,
                resizeMode: 'cover',
                borderRadius: 50,
              }}
              source={{uri: image}}
            />
            <Block marginHorizontal={8}>
              <Text fontType="bold">{title}</Text>
              <Text marginTop={8} color={theme.colors.blue} fontType="bold">
                {price}
              </Text>
            </Block>
          </Block>
        </Block>
      </Pressable>
    </Swipeout>
  );
};

export default ItemCart;
