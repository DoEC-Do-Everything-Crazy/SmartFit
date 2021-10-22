import {Block, Button, Text, TextInput} from '@components';
import {Image, Platform, Pressable, ScrollView} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';

import {BottomSheet} from '@components/BottomSheet';
/* eslint-disable react-hooks/exhaustive-deps */
import {Camera} from '@assets/icons';
import {Rating} from 'react-native-ratings';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';

const ItemOrder = ({picture, title, group_id, onPress, index, props}) => {
  const modalizRef = useRef(null);

  const [isReceived, setReceived] = useState(true);
  const [comment, setComment] = useState('');
  const {t} = useTranslation();
  const insets = useSafeAreaInsets();
  const [showDetail, setShowDetail] = useState(false);
  const navigation = useNavigation();

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const handleToOrderDetail = useCallback(() => {
    modalizRef?.current.open();
    setShowDetail(true);
  }, []);
  const handleOpenConfirm = useCallback(() => {
    navigation.navigate(routes.RATE_SCREEN);
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
                Order N0.1947034
              </Text>
            </Block>
            <Block row flex={1} justifyEnd>
              <Text>05-12-2019</Text>
            </Block>
          </Block>
          <Block row>
            <Text>Tracking number:</Text>
            <Text marginLeft={10} fontType="bold">
              IW3475453455
            </Text>
          </Block>
          <Block row flex={1}>
            <Block row flex={1}>
              <Text>Quantity:</Text>
              <Text marginLeft={10} fontType="bold">
                3
              </Text>
            </Block>
            <Block row flex={1} justifyEnd>
              <Text>Total Amount:</Text>
              <Text marginLeft={10} fontType="bold">
                112$
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
            {isReceived ? (
              <Block row flex={1} justifyEnd alignCenter>
                <Pressable
                  onPress={handleOpenConfirm}
                  style={styles.itemConfirm}>
                  <Text color={theme.colors.white}>{t('confirm')}</Text>
                </Pressable>
              </Block>
            ) : (
              <Block row flex={1} justifyEnd alignCenter>
                <Text
                  marginRight={10}
                  fontType="bold"
                  color={theme.colors.green}>
                  {t('delivering')}
                </Text>
                <Pressable style={styles.itemCancel}>
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
          <ScrollView>
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
                        Order N0.1947034
                      </Text>
                    </Block>
                    <Block row flex={1} justifyEnd>
                      <Text>05-12-2019</Text>
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
                      <Text fontType="bold">10 items</Text>
                    </Block>
                  </Block>
                </Block>
                <Block
                  row
                  radius={8}
                  marginTop={16}
                  backgroundColor={theme.colors.border}>
                  <Block height="100%">
                    <Image
                      source={{
                        uri: 'https://i.pinimg.com/564x/5a/93/ce/5a93ceca8cf5277d2fc552ad4092a571.jpg',
                      }}
                      height="100%"
                      style={styles.imageItem}
                    />
                  </Block>
                  <Block width="100%" padding={16}>
                    <Text size={16} fontType="bold" marginBottom={5}>
                      Pullover
                    </Text>
                    <Block marginLeft={10} row>
                      <Text>Mango</Text>
                    </Block>
                    <Block row>
                      <Block row>
                        <Text>Color:</Text>
                        <Text marginLeft={10} fontType="bold">
                          Gray
                        </Text>
                      </Block>
                      <Block row marginLeft={40}>
                        <Text>Size:</Text>
                        <Text marginLeft={10} fontType="bold">
                          L
                        </Text>
                      </Block>

                      <Block row flex={1} paddingTop={5}>
                        <Block row flex={1} justifyEnd alignCenter>
                          <Text fontType="bold">51$</Text>
                        </Block>
                      </Block>
                    </Block>
                  </Block>
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
                      <Text fontType="bold">
                        3 Newbridge Court ,Chino Hills, CA 91709, United States
                      </Text>
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
                      <Text fontType="bold">133$</Text>
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
