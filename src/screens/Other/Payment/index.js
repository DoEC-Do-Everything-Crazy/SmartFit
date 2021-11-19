import React, {useState, useEffect} from 'react';
import {Block, Text, Header, TextInput, PayInfo, Button} from '@components';
import {FlatList, Pressable, ScrollView} from 'react-native';
import ItemCart from '@components/ItemList/ItemCart';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';
import {clearCart} from 'reduxs/reducers';
import {Address} from '@assets/icons';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useNavigation} from '@react-navigation/core';
import {orderApi} from 'api/orderApi';
import {promotionApi} from 'api/promotionApi';
import {routes} from '@navigation/routes';

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
  const renderItem = ({item, index}) => <ItemCart notQuantity item={item} />;
  const [isAddress, setAddress] = useState(false);
  const [promotion, setPromotion] = useState('');
  const [valueDiscount, setValueDiscount] = useState(0);
  const totalPriceCart = cart.reduce(
    (total, item) =>
      item.quantity * item.lastPrice +
      (item.pt?.price ? item.pt.price : 0) +
      total,
    0,
  );
  const delivery = 20000;
  const total = totalPriceCart + delivery - valueDiscount;

  const handleAddress = () => {
    setAddress(true);
    navigation.navigate(routes.DELIVERY_INFORMATION_SCREEN);
  };

  const addOrder = async formData => {
    const res = await orderApi.addOrder(formData);

    if (res.status === 200) {
      console.log('add success');
      dispatch(clearCart());
      navigation.navigate(routes.ORDER_SCREEN);
    }
  };

  const handlePromotion = async () => {
    const res = await promotionApi.getPromotionByKey(promotion);
    if (res.status === 200) {
      setValueDiscount(totalPriceCart * res.data);
      console.log('promotion = ', res.data);
    }
  };

  const handleOrder = () => {
    addOrder({
      userId: user.uid,
      address: address,
      total: total,
      delivery: delivery,
      promotion: promotion,
      discount: valueDiscount,
      cart: cart,
    });
  };

  useEffect(() => {
    handlePromotion();
  }, [promotion]);

  return (
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
        <Block>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </Block>
        <Block marginHorizontal={16}>
          <Text marginVertical={5}>{t('promotion')}</Text>
          <TextInput
            inputStyle={{flex: 1}}
            paddingHorizontal={10}
            value={promotion}
            onChangeText={text => setPromotion(text)}
          />
        </Block>
        <Block marginHorizontal={16}>
          <PayInfo
            title1={t('orderCart')}
            titlePrice1={totalPriceCart}
            title2={t('delivery')}
            titlePrice2={delivery}
            title3={t('discount')}
            titlePrice3={valueDiscount || 0}
            isDiscount={true}
          />
        </Block>

        <Button onPress={handleOrder} title={t('ORDER')} />
      </ScrollView>
    </Block>
  );
};

export default Payment;
