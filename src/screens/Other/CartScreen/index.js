import {Block, Button, Text} from '@components';
import Header from '@components/Header';
import React from 'react';
import {Pressable} from 'react-native';
import CartList from './components/CartList';
import {PayInfo, InviteLogin} from '@components';
import DATA from './DATA';
import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';
import {Cart_data} from '@assets/icons';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const CartScreen = props => {
  const {
    theme: {theme: themeStore},
    user: {user},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();
  const Cart = () =>
    DATA.length > 0 ? (
      <>
        <Block flex backgroundColor={theme.colors.backgroundSetting}>
          <Header canGoBack colorTheme={theme.colors.blue} title={t('cart')} />
          <CartList DATA={DATA} />
          <Block paddingHorizontal={16}>
            <PayInfo
              title1={t('orderCart')}
              titlePrice1={112}
              title2={t('delivery')}
              titlePrice2={15}
              total={127}
            />
          </Block>
          <Button
            title={t('confirm')}
            // onPress={() => {
            //   something
            // }}
          />
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

  return JSON.stringify(user) !== '{}' ? (
    <Cart color={theme.colors.white} />
  ) : (
    <>
      <Header title="Cart" />
      <InviteLogin navigate={routes.LOGIN_SCREEN} routes={routes.CART_SCREEN} />
    </>
  );
};

export default CartScreen;
