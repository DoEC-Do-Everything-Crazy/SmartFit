import {icons} from '@assets';
import {Block, Text} from '@components';
import Header from '@components/Header';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import CartList from './components/CartList';
import PayInfo from './components/PayInfo';
import DATA from './DATA';
import styles from './styles';

const CartScreen = () => {
  return DATA.length > 0 ? <Cart /> : <NotData />;
};

const Cart = () => (
  <Block flex backgroundColor={theme.colors.background}>
    <Header canGoBack colorTheme={theme.colors.blue} title="Cart" />
    <CartList DATA={DATA} />
    <Block paddingHorizontal={16}>
      <PayInfo
        title1="Order"
        titlePrice1={112}
        title2="Delivery"
        titlePrice2={15}
        total={127}
      />
    </Block>
    <Pressable style={styles.press}>
      <Text fontType="bold" color={theme.colors.white}>
        ORDER
      </Text>
    </Pressable>
  </Block>
);

const NotData = () => (
  <Block flex>
    <Header canGoBack colorTheme={theme.colors.blue} title="Cart" />
    <Block flex justifyCenter alignCenter marginHorizontal={16}>
      <Image source={icons.cart_data} />
      <Text size={30} marginTop={20} fontType="bold">
        No order yet
      </Text>
      <Text center marginHorizontal={40}>
        Hit the orange button down below to Create an order
      </Text>
    </Block>
    <Pressable style={styles.press}>
      <Text fontType="bold" color={theme.colors.white}>
        START ORDERING
      </Text>
    </Pressable>
  </Block>
);

export default CartScreen;
