import {Block, Text} from '@components';
import Header from '@components/Header';
import {theme} from '@theme';
import React from 'react';
import {Pressable} from 'react-native';
import CartList from './components/CartList';
import {PayInfo, InviteLogin} from '@components';
import DATA from './DATA';
import styles from './styles';
import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';
import {Cart_data} from '@assets/icons';

const CartScreen = () => {
  const {user} = useSelector(state => state.root.user);
  return JSON.stringify(user) !== '{}' ? (
    <Cart />
  ) : (
    <>
      <Header title="Cart" />
      <InviteLogin navigate={routes.LOGIN_SCREEN} routes={routes.CART_SCREEN} />
    </>
  );
};

const Cart = () =>
  DATA.length > 0 ? (
    <>
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
    </>
  ) : (
    <NotData />
  );

const NotData = () => (
  <Block flex>
    <Header canGoBack colorTheme={theme.colors.blue} title="Cart" />
    <Block flex justifyCenter alignCenter marginHorizontal={16}>
      <Cart_data />
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
