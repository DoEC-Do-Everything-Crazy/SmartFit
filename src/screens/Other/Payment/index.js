import {Block, Button, Header, PayInfo, Text, TextInput} from '@components';
import {FlatList, Pressable, ScrollView} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

/* eslint-disable react-hooks/exhaustive-deps */
import {Address} from '@assets/icons';
import ItemCart from '@components/ItemList/ItemCart';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackActions} from '@react-navigation/native';
import {clearCart} from 'reduxs/reducers';
import {keyExtractor} from 'utils/keyExtractor';
import {orderApi} from 'api/orderApi';
import {promotionApi} from 'api/promotionApi';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const Payment = ({props, route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const name = route.params?.name;
  const address = route.params?.address;
  const phone = route.params?.phone;
  const {t} = useTranslation();
  const {
    theme: {theme: themeStore},
    user: {user},
    cart: {cart},
  } = useSelector(stateRoot => stateRoot.root);

  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);

  const renderItem = useCallback(({item, index}) => {
    return <ItemCart notQuantity item={item} />;
  }, []);

  const [isAddress, setAddress] = useState(false);
  const [promotionCode, setPromotionCode] = useState('');
  const [totalPriceCart, setTotalPriceCart] = useState(
    cart.reduce(
      (total, item) =>
        item.quantity * item.lastPrice +
        (item.pt?.price ? item.pt.price : 0) +
        total,
      0,
    ),
  );
  const [discount, setDiscount] = useState(0);

  const handleAddress = () => {
    setAddress(true);
    navigation.navigate(routes.DELIVERY_INFORMATION_SCREEN);
  };

  const addOrder = async formData => {
    try {
      await orderApi.addOrder(formData);

      dispatch(clearCart());
      navigation.dispatch(StackActions.replace(routes.ORDER_SCREEN));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handlePromotion = async () => {
    try {
      const response = await promotionApi.getPromotionByKey(promotionCode);

      setDiscount(totalPriceCart * response);
    } catch (error) {
      console.error(error.message);
      setDiscount(0);
    }
  };

  const handleOrder = () => {
    addOrder({
      cart,
      shippingInfo: `${name}, ${phone}, ${address}`,
      total: totalPriceCart,
      delivery: 20000,
      promotionCode: promotionCode,
      discount: discount || 0,
      subTotal: totalPriceCart + 20000 - (discount || 0),
    });
  };

  useEffect(() => {
    if (promotionCode === '') {
      setDiscount(0);
    } else {
      handlePromotion();
    }
  }, [promotionCode]);

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={styles.sendControlContainerOuter}>
      <Block flex>
        <Header canGoBack cart title={t('payment')} />
        <ScrollView>
          <Pressable onPress={handleAddress} style={styles.address}>
            <Address />
            <Block width="90%" marginHorizontal={5} marginVertical={5}>
              <Text size={18}>{t('addressShip')}</Text>
              {isAddress ? (
                <>
                  <Text>{name + ' - ' + phone}</Text>
                  <Text>{address}</Text>
                </>
              ) : (
                <>
                  <Text>{t('enterAddress')}</Text>
                </>
              )}
            </Block>
          </Pressable>
          <Block marginTop={16}>
            <FlatList
              data={cart}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
            />
          </Block>
          <Block marginHorizontal={16} marginTop={16}>
            <TextInput
              label={t('promotion')}
              inputStyle={{flex: 1}}
              paddingHorizontal={10}
              value={promotionCode}
              onChangeText={text => setPromotionCode(text.toUpperCase())}
            />
          </Block>
        </ScrollView>
        <Block marginHorizontal={16} marginBottom={16}>
          <PayInfo
            title1={t('orderCart')}
            titlePrice1={totalPriceCart}
            title2={t('delivery')}
            titlePrice2={20000}
            title3={t('discount')}
            titlePrice3={discount}
            isDiscount
          />
        </Block>

        <Button onPress={handleOrder} title={t('confirmOrder')} />
      </Block>
    </SafeAreaView>
  );
};

export default Payment;
