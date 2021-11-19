import {Block, Button, Text, TextInput} from '@components';
import {Image, Platform, Pressable, ScrollView} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';

import {BottomSheet} from '@components/BottomSheet';
/* eslint-disable react-hooks/exhaustive-deps */
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import ItemCart from '@components/ItemList/ItemCart';
import {useTranslation} from 'react-i18next';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {FlatList} from 'react-native';
import {orderApi} from 'api/orderApi';

const ItemOrder = ({item, onPress, index, props}) => {
  const modalizRef = useRef(null);
  const [status, setStatus] = useState(item.status);
  const {t} = useTranslation();
  const insets = useSafeAreaInsets();
  const [showDetail, setShowDetail] = useState(false);
  const navigation = useNavigation();

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const renderItem = ({item, index}) => <ItemCart notQuantity item={item} />;

  const handleToOrderDetail = useCallback(() => {
    modalizRef?.current.open();
    setShowDetail(true);
  }, []);
  const handleOpenConfirm = useCallback(() => {
    navigation.navigate(routes.RATE_SCREEN, {
      item: {foodId: '6176c277b585a7132c9bd557'},
    });
  }, []);
  const FloatingComponent = useCallback(() => {
    if (insets.bottom === 0) {
      return null;
    } else {
      return <Block style={[styles.floatComponent, {height: insets.bottom}]} />;
    }
  }, [insets.bottom, styles.floatComponent]);

  const HeaderComponent = useCallback(() => {
    return (
      <>
        <Block paddingVertical={10}>
          <Text center fontType="bold" size={16}>
            {t('orderDetail')}
          </Text>
        </Block>
      </>
    );
  }, [theme.colors.backgroundSetting, showDetail]);
  const FooterComponent = useCallback(() => {
    return (
      <Block marginBottom={20} row alignCenter justifyCenter>
        <Pressable style={styles.itemReorder} borderColor={theme.colors.text}>
          <Text>Reorder</Text>
        </Pressable>
        <Pressable style={styles.itemLeave} onPress={handleOpenConfirm}>
          <Text color={theme.colors.white}>Leave feedback</Text>
        </Pressable>
      </Block>
    );
  }, [
    onPress,
    styles.image,
    theme.colors.backgroundSetting,
    theme.colors.border,
    showDetail,
  ]);
  const handleCancelBill = async () => {
    const res = await orderApi.updateOrder({id: item._id, status: 'Cancel'});
    if (res.status === 200) {
      setStatus('Cancel');
      console.log('update status success');
    }
  };
  return (
    <>
      <Block
        row
        key={index}
        marginTop={16}
        padding={16}
        radius={8}
        backgroundColor={theme.colors.border}>
        <Block width="100%">
          <Block row flex={1}>
            <Block row flex={1}>
              <Text size={16} fontType="bold" marginBottom={5}>
                {item._id.substring(8)}
              </Text>
            </Block>
            <Block row flex={1} justifyEnd>
              <Text>{item.createdAt.substring(0, 10)}</Text>
            </Block>
          </Block>

          <Block row flex={1}>
            <Block row flex={1}>
              <Text>Promotion:</Text>
              <Text marginLeft={10} fontType="bold">
                {item.promotion}
              </Text>
            </Block>
            <Block row flex={1} justifyEnd>
              <Text>Total Amount:</Text>
              <Text marginLeft={10} fontType="bold">
                {item.total}$
              </Text>
            </Block>
          </Block>

          <Block row flex={1} paddingTop={5}>
            <Block row flex={1} justifyStart>
              <Pressable
                style={styles.item}
                borderColor={theme.colors.text}
                onPress={handleToOrderDetail}>
                <Text>{t('detail')}</Text>
              </Pressable>
            </Block>
            {status === 'received' && (
              <Block row flex={1} justifyEnd alignCenter>
                <Pressable
                  onPress={handleOpenConfirm}
                  style={styles.itemConfirm}>
                  <Text color={theme.colors.white}>{t('confirm')}</Text>
                </Pressable>
              </Block>
            )}
            {status === 'Cancel' && (
              <Block row flex={1} justifyEnd alignCenter>
                <Text
                  marginRight={10}
                  fontType="bold"
                  color={theme.colors.green}>
                  Cancel
                </Text>
              </Block>
            )}
            {status === 'pending' && (
              <Block row flex={1} justifyEnd alignCenter>
                <Text
                  marginRight={10}
                  fontType="bold"
                  color={theme.colors.green}>
                  {item.status} aaaa
                </Text>
                <Pressable onPress={handleCancelBill} style={styles.itemCancel}>
                  <Text color={theme.colors.white}>{t('cancel')}</Text>
                </Pressable>
              </Block>
            )}
          </Block>
        </Block>
        <BottomSheet
          ref={modalizRef}
          adjustToContentHeight={true}
          HeaderComponent={HeaderComponent}
          FloatingComponent={FloatingComponent}
          FooterComponent={FooterComponent}
          scrollViewProps={{keyboardShouldPersistTaps: 'handle'}}
          keyboardAvoidingBehavior={
            Platform.OS === 'ios' ? 'padding' : 'height'
          }>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Block flex backgroundColor={theme.colors.backgroundSetting}>
              <Block
                flex
                paddingHorizontal={16}
                paddingTop={20}
                marginBottom={20}
                backgroundColor={theme.colors.backgroundSetting}>
                <Block width="100%" height="11%" marginBottom={20}>
                  <Block row flex={1}>
                    <Block row flex={1}>
                      <Text size={16} fontType="bold" marginBottom={5}>
                        {item._id.substring(0, 18)}
                      </Text>
                    </Block>
                    <Block row flex={1} justifyEnd>
                      <Text>{item.createdAt.substring(0, 10)}</Text>
                    </Block>
                  </Block>
                  <Block row justifyStart>
                    <Text>Tracking number:</Text>
                    <Text marginLeft={10} fontType="bold">
                      IW3475453455
                    </Text>
                    <Block row flex={1} justifyEnd>
                      <Text color={theme.colors.green}>Delivered</Text>
                    </Block>
                  </Block>
                  <Block marginTop={5} row flex={1}>
                    <Block row flex={1}>
                      <Text fontType="bold">{item.cart.length} Item</Text>
                    </Block>
                  </Block>
                </Block>
                <Block
                  row
                  radius={8}
                  marginTop={16}
                  backgroundColor={theme.colors.border}>
                  <FlatList
                    data={item.cart}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                  />
                </Block>
                <Block height="27%" marginTop={20}>
                  <Text size={16} fontType="bold">
                    Order information
                  </Text>
                  <Block row marginTop={15}>
                    <Block width="40%">
                      <Text>Shipping Address:</Text>
                    </Block>
                    <Block width="60%">
                      <Text fontType="bold">{item.address}</Text>
                    </Block>
                  </Block>
                  <Block row marginTop={10}>
                    <Block width="40%">
                      <Text>Discount:</Text>
                    </Block>
                    <Block width="60%">
                      <Text fontType="bold">10%, Personal promo code</Text>
                    </Block>
                  </Block>
                  <Block row marginTop={10}>
                    <Block width="40%">
                      <Text>Total Amount:</Text>
                    </Block>
                    <Block width="60%">
                      <Text fontType="bold">{item.total}$</Text>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </ScrollView>
        </BottomSheet>
      </Block>
    </>
  );
};

export default ItemOrder;
