import React, {useState} from 'react';
import {Block, Text, Header, TextInput, PayInfo, Button} from '@components';
import {FlatList, Pressable, ScrollView} from 'react-native';
import ItemCart from '@components/ItemList/ItemCart';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {Address} from '@assets/icons';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const Payment = ({props}) => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const {
    theme: {theme: themeStore},
    user: {user},
    cart: {cart},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);
  const renderItem = ({item, index}) => <ItemCart item={item} />;
  const [isDiscount, setIsDiscount] = useState(false);

  const handleAddress = () => {
    navigation.navigate(routes.DELIVERY_INFORMATION_SCREEN);
  };

  return (
    <Block flex>
      <Header canGoBack cart title={t('payment')} />
      <ScrollView>
        <Pressable onPress={handleAddress} style={styles.address}>
          <Address />
          <Block width="90%" marginHorizontal={5} marginVertical={5}>
            <Text size={18}>Địa chỉ nhận hàng</Text>
            <Text>Hồ Công Khanh - 0344108493</Text>
            <Text>
              Ấp Mỹ Phú xã Mỹ Hạnh Đông thị xã Cai Lậy tỉnh Tiền Giang
            </Text>
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
          <Text marginVertical={5}>Mã giảm giá</Text>
          <TextInput paddingHorizontal={10} placeholder="ádaaaaaaaaaa" />
        </Block>
        <Block marginHorizontal={16}>
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
            title3={t('discount')}
            titlePrice3={4000}
            isDiscount={isDiscount}
          />
        </Block>

        <Button title={t('ORDER')} />
      </ScrollView>
    </Block>
  );
};

export default Payment;
