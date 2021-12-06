import {Block, Button, Header, InviteLogin, PayInfo, Text} from '@components';
import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import CartList from './components/CartList';
/* eslint-disable react-hooks/exhaustive-deps */
import {Cart_data} from '@assets/icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {clearCart} from 'reduxs/reducers';
import {orderApi} from 'api/orderApi';
import {routes} from '@navigation/routes';
import setAuthToken from 'utils/setAuthToken';
import {useNavigation} from '@react-navigation/core';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const CartScreen = props => {
  const dispatch = useDispatch();
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

      if (res) {
        navigation.navigate(routes.PAYMENT_SCREEN);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleToHome = useCallback(() => {
    navigation.goBack();
  }, []);

  const handleConfirm = () => {
    checkCart(cart);
  };

  const Cart = () => {
    return (
      <>
        {cart.length !== 0 ? (
          <>
            <CartList />
            <Block paddingHorizontal={16} marginVertical={16}>
              <PayInfo
                title1={t('orderCart')}
                titlePrice1={cart.reduce(
                  (total, item) =>
                    item.quantity * item.lastPrice +
                    (item.pt?.price ? item.pt.price : 0) +
                    total,
                  0,
                )}
              />
            </Block>
            <Button title={t('confirm')} onPress={handleConfirm} />
          </>
        ) : (
          <NotData />
        )}
      </>
    );
  };

  const NotData = () => (
    <Block flex>
      <Block flex justifyCenter alignCenter marginHorizontal={16}>
        <Cart_data />
        <Text size={30} marginTop={20} fontType="bold">
          {t('noOrder')}
        </Text>
        <Text center marginHorizontal={40}>
          {t('titleNoOder')}
        </Text>
      </Block>
      <Button title={t('startOrder')} onPress={handleToHome} />
    </Block>
  );

  useEffect(() => {
    user && setAuthToken(token);
  }, []);

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={styles.sendControlContainerOuter}>
      <Block flex backgroundColor={theme.colors.backgroundSetting}>
        <Header canGoBack colorTheme={theme.colors.blue} title={t('cart')} />
        {user ? (
          <Cart color={theme.colors.white} />
        ) : (
          <InviteLogin
            navigate={routes.LOGIN_SCREEN}
            routes={routes.CART_SCREEN}
          />
        )}
      </Block>
    </SafeAreaView>
  );
};

export default CartScreen;
