import {Block, Text} from '@components';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import styles from './styles';
import {theme} from '@theme';
const ItemOrder = ({picture, title, group_id, index}) => {
  const [isReceived, setReceived] = useState(false);
  return (
    <Block
      flex
      row
      key={index}
      marginTop={16}
      padding={16}
      radius={5}
      color={theme.colors.white}>
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
        <Block marginLeft={10} row>
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
            <Pressable onPress={() => console.log('click')} style={styles.item}>
              <Text>Details</Text>
            </Pressable>
          </Block>
          {isReceived ? (
            <Block row flex={1} justifyEnd alignCenter>
              <Pressable
                onPress={() => console.log('click')}
                style={styles.itemConfirm}>
                <Text color={theme.colors.white}>Confirm</Text>
              </Pressable>
              <Text marginLeft={10} fontType="bold" color={theme.colors.green}>
                Received
              </Text>
            </Block>
          ) : (
            <Block row flex={1} justifyEnd alignCenter>
              <Pressable
                onPress={() => console.log('click')}
                style={styles.itemCancel}>
                <Text color={theme.colors.white}>Cancel</Text>
              </Pressable>
              <Text marginLeft={10} fontType="bold" color={theme.colors.green}>
                Delivered
              </Text>
            </Block>
          )}
        </Block>
      </Block>
    </Block>
  );
};

export default ItemOrder;
