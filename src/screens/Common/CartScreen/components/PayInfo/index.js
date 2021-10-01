import {Block, Text} from '@components';
import React from 'react';

const PayInfo = ({title1, titlePrice1, title2, titlePrice2, total}) => {
  return (
    <Block borderRadius={8} marginTop={10} padding={15} backgroundColor="white">
      <Block row marginHorizontal={16} space="between">
        <Text>{title1}:</Text>
        <Text>{titlePrice1}$</Text>
      </Block>
      <Block
        borderWidth={0.5}
        marginBottom={10}
        marginTop={5}
        marginHorizontal={25}
      />
      <Block row marginHorizontal={16} marginTop={5} space="between">
        <Text>{title2}:</Text>
        <Text>{titlePrice2}$</Text>
      </Block>
      <Block
        borderWidth={0.5}
        marginBottom={10}
        marginTop={5}
        marginHorizontal={25}
      />
      <Block row marginHorizontal={16} marginTop={5} space="between">
        <Text fontType="bold">Summary:</Text>
        <Text fontType="bold">{total}$</Text>
      </Block>
    </Block>
  );
};

export default PayInfo;
