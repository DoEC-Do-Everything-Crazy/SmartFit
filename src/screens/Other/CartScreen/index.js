import {Block, Button, InviteLogin, PayInfo, Text} from '@components';
import React, {useEffect} from 'react';

import CartList from './components/CartList';
/* eslint-disable react-hooks/exhaustive-deps */
import {Cart_data} from '@assets/icons';
import Header from '@components/Header';
import {Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {orderApi} from 'api/orderApi';
import {routes} from '@navigation/routes';
import setAuthToken from 'utils/setAuthToken';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const CartScreen = props => {
  const navigation = useNavigation();
  const {
    theme: {theme: themeStore},
    user: {user, token},
    cart: {cart},
  } = useSelector(stateRoot => stateRoot.root);

  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();

  const checkCart = async formData => {
    try {
      const res = await orderApi.checkCartList({cartList: formData});

      console.log(res);

      if (res) {
        navigation.navigate(routes.PAYMENT_SCREEN);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleConfirm = () => {
    checkCart(cart);
  };

  const Cart = () => {
    return (
      <SafeAreaView
        edges={['bottom', 'left', 'right']}
        style={styles.sendControlContainerOuter}>
        {cart.length > 0 ? (
          <Block flex backgroundColor={theme.colors.backgroundSetting}>
            <Header
              canGoBack
              colorTheme={theme.colors.blue}
              title={t('cart')}
            />
            <CartList />
            <Block paddingHorizontal={16}>
              <PayInfo
                title1={t('orderCart')}
                titlePrice1={cart.reduce(
                  (total, item) =>
                    item.quantity * item.lastPrice +
                    (item.pt?.price ? item.pt.price : 0) +
                    total,
                  0,
                )}
                title2={t('delivery')}
                titlePrice2={20000}
              />
            </Block>
            <Button title={t('confirm')} onPress={handleConfirm} />
          </Block>
        ) : (
          <NotData />
        )}
      </SafeAreaView>
    );
  };

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

  useEffect(() => {
    user && setAuthToken(token);
    // dispatch(clearCart());
  }, []);

  return user ? (
    <Cart color={theme.colors.white} />
  ) : (
    <>
      <Header title="Cart" />
      <InviteLogin navigate={routes.LOGIN_SCREEN} routes={routes.CART_SCREEN} />
    </>
  );
};

export default CartScreen;
