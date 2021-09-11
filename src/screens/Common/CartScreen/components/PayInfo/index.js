import {Block, Text} from '@components';
import React from 'react';

const PayInfo = () => {
  return (
    <Block
      marginHorizontal={16}
      borderRadius={8}
      marginTop={10}
      padding={15}
      backgroundColor="white">
      <Block row marginHorizontal={16} space="between">
        <Text>Order</Text>
        <Text>112$</Text>
      </Block>
      <Block
        borderWidth={0.5}
        marginBottom={10}
        marginTop={5}
        marginHorizontal={25}
      />
      <Block row marginHorizontal={16} marginTop={5} space="between">
        <Text>Delivery:</Text>
        <Text>15$</Text>
      </Block>
      <Block
        borderWidth={0.5}
        marginBottom={10}
        marginTop={5}
        marginHorizontal={25}
      />
      <Block row marginHorizontal={16} marginTop={5} space="between">
        <Text fontType="bold">Summary:</Text>
        <Text fontType="bold">127$</Text>
      </Block>
    </Block>
  );
};

export default PayInfo;
