import {Block, Header, Text} from '@components';
import ItemOrderDetail from '@components/ItemList/ItemOrderDetail';
import {theme} from '@theme';
import React from 'react';
import {Dimensions, FlatList, Pressable} from 'react-native';
import styles from './styles';

const {width: width} = Dimensions.get('screen');

const OrderDetailScreen = () => {
  const _renderItem = (item, index) => <ItemOrderDetail index={index} />;

  return (
    <Block flex marginBottom={16} backgroundColor={theme.colors.background}>
      <Header canGoBack title="Order Detail" colorTheme={theme.colors.black} />
      <Block
        flex
        paddingHorizontal={16}
        backgroundColor={theme.colors.background}>
        <Block width="100%" height="11%">
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
          <Block marginLeft={10} row justifyStart>
            <Text>Tracking number:</Text>
            <Text marginLeft={10} fontType="bold">
              IW3475453455
            </Text>
            <Block row flex={1} justifyEnd>
              <Text color={theme.colors.green}>Delivered</Text>
            </Block>
          </Block>
          <Block row flex={1}>
            <Block row flex={1}>
              <Text fontType="bold">10 items</Text>
            </Block>
          </Block>
        </Block>
        <Block height="50%" marginTop={5}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={_renderItem}
            keyExtractor={item => item.item_id}
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
        <Block row alignCenter justifyCenter>
          <Pressable style={styles.itemReorder}>
            <Text>Reorder</Text>
          </Pressable>
          <Pressable style={styles.itemLeave}>
            <Text color={theme.colors.white}>Leave feedback</Text>
          </Pressable>
        </Block>
      </Block>
    </Block>
  );
};

export default OrderDetailScreen;
