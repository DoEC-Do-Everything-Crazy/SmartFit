import {Block, Header, Text} from '@components';

import React from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const OrderDetailScreen = props => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Header canGoBack title="Order Detail" colorTheme={theme.colors.black} />
      <Block
        flex
        paddingHorizontal={16}
        paddingTop={20}
        marginBottom={20}
        backgroundColor={theme.colors.backgroundSetting}>
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
              style={styles.image}
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
      <Block marginBottom={20} row alignCenter justifyCenter>
        <Pressable style={styles.itemReorder} borderColor={theme.colors.text}>
          <Text>Reorder</Text>
        </Pressable>
        <Pressable style={styles.itemLeave}>
          <Text color={theme.colors.white}>Leave feedback</Text>
        </Pressable>
      </Block>
    </Block>
  );
};

export default OrderDetailScreen;