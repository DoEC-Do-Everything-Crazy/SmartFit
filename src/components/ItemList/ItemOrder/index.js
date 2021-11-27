/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Text} from '@components';
import {FlatList, Platform, Pressable, ScrollView} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';

import {BottomSheet} from '@components/BottomSheet';
import ItemCart from '@components/ItemList/ItemCart';
import {keyExtractor} from 'utils/keyExtractor';
import {orderApi} from 'api/orderApi';
import {routes} from '@navigation/routes';
import setAuthToken from 'utils/setAuthToken';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const ItemOrder = ({item, onPress, index, props}) => {
  const isDelivered = item.status === 'delivered';
  const modalizRef = useRef(null);
  const [status, setStatus] = useState(item.status);
  const {t} = useTranslation();
  const insets = useSafeAreaInsets();
  const [showDetail, setShowDetail] = useState(false);
  const navigation = useNavigation();

  const {
    theme: {theme: themeStore},
    user: {token},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const renderItem = ({item}) => {
    const handleRate = () => {
      if (item.key.includes('C')) {
        navigation.navigate(routes.RATE_SCREEN, {
          item: {courseId: item._id},
        });
        return;
      }
      if (item.key.includes('F')) {
        navigation.navigate(routes.RATE_SCREEN, {
          item: {foodId: item._id},
        });
        return;
      }
      if (item.key.includes('P')) {
        navigation.navigate(routes.RATE_SCREEN, {
          item: {productId: item._id},
        });
      }
    };
    return (
      <ItemCart
        onPress={handleRate}
        notQuantity
        notRate={!isDelivered}
        item={item}
      />
    );
  };

  const handleToOrderDetail = useCallback(() => {
    modalizRef?.current.open();
    setShowDetail(true);
  }, []);

  const handleOpenConfirm = useCallback(() => {
    console.log('confirm');
    // navigation.navigate(routes.RATE_SCREEN, {
    //   item: {foodId: '6176c277b585a7132c9bd557'},
    // });
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
        <Pressable
          onPress={() => {
            modalizRef?.current.close();
            navigation.navigate(routes.FOOD_LIST_SCREEN);
          }}
          style={styles.itemReorder}
          borderColor={theme.colors.text}>
          <Text>{t('reOrder')}</Text>
        </Pressable>
        <Pressable
          onPress={() => modalizRef?.current.close()}
          style={styles.itemLeave}>
          <Text color={theme.colors.white}>{t('leaveFeedback')}</Text>
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
    try {
      setAuthToken(token);
      await orderApi.cancelOrder({id: item._id});
      setStatus('cancelled');
    } catch (error) {
      console.error(error.message);
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
              <Text>{t('promotion')}:</Text>
              <Text marginLeft={10} fontType="bold">
                {item.promotion}
              </Text>
            </Block>
            <Block row flex={1} justifyEnd>
              <Text>{t('totalAmount')}:</Text>
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
            {status === 'delivered' ? (
              <Block row flex={1} justifyEnd alignCenter>
                <Text
                  marginRight={10}
                  fontType="bold"
                  color={theme.colors.lightBlue}>
                  {t(`${status}`)}
                </Text>
                {/* <Pressable
                  onPress={handleOpenConfirm}
                  style={styles.itemConfirm}>
                  <Text color={theme.colors.white}>{t('confirm')}</Text>
                </Pressable> */}
              </Block>
            ) : status === 'cancelled' ? (
              <Block row flex={1} justifyEnd alignCenter>
                <Text marginRight={10} fontType="bold" color={theme.colors.red}>
                  {t(`${status}`)}
                </Text>
              </Block>
            ) : status === 'pending' ? (
              <Block row flex={1} justifyEnd alignCenter>
                <Text
                  marginRight={10}
                  fontType="bold"
                  color={theme.colors.blue}>
                  {t(`${status}`)}
                </Text>
                <Pressable onPress={handleCancelBill} style={styles.itemCancel}>
                  <Text color={theme.colors.white}>{t('cancel')}</Text>
                </Pressable>
              </Block>
            ) : (
              <Block row flex={1} justifyEnd alignCenter>
                <Text
                  marginRight={10}
                  fontType="bold"
                  color={
                    status === 'processing'
                      ? theme.colors.green
                      : status === 'delivering'
                      ? theme.colors.yellow
                      : theme.colors.red
                  }>
                  {t(`${status}`)}
                </Text>
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
                    <Block row flex={1} justifyEnd>
                      <Text color={theme.colors.green}>{t(item.status)}</Text>
                    </Block>
                  </Block>
                  {/* <Block marginTop={5} row flex={1}>
                    <Block row flex={1}>
                      <Text fontType="bold">{item.cart.length} Item</Text>
                    </Block>
                  </Block> */}
                </Block>
                <Block
                  row
                  radius={8}
                  marginTop={16}
                  backgroundColor={theme.colors.border}>
                  <FlatList
                    data={item.cart}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                  />
                </Block>
                <Block height="27%" marginTop={20}>
                  <Text size={16} fontType="bold">
                    {t('orderInformation')}
                  </Text>
                  <Block row marginTop={15}>
                    <Block width="40%">
                      <Text>{t('addressShip')}:</Text>
                    </Block>
                    <Block width="60%">
                      <Text fontType="bold">{item.address}</Text>
                    </Block>
                  </Block>
                  <Block row marginTop={10}>
                    <Block width="40%">
                      <Text>{t('discount')}:</Text>
                    </Block>
                    <Block width="60%">
                      <Text fontType="bold">{item.discount * 100}%</Text>
                    </Block>
                  </Block>
                  <Block row marginTop={10}>
                    <Block width="40%">
                      <Text>{t('totalAmount')}:</Text>
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
