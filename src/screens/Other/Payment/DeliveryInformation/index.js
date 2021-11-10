import React from 'react';
import {Block, Text, Header, TextInput} from '@components';

const DeliveryInformation = () => {
  return (
    <Block flex>
      <Header canGoBack title="Thêm địa chỉ" />
      <Block backgroundColor="white">
        <Text marginHorizontal={16} size={20} fontType="bold">
          Liên hệ
        </Text>
        <Block marginHorizontal={25} marginVertical={10}>
          <TextInput paddingHorizontal={10} placeholder="Họ và tên" />
          <Block marginVertical={5} />
          <TextInput paddingHorizontal={10} placeholder="Số điện thoại" />
        </Block>
      </Block>
    </Block>
  );
};

export default DeliveryInformation;
