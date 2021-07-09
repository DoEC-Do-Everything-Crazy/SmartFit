import {Block, Header, Button} from '@components';
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const InfoScreen = () => {
  const navigation = useNavigation();

  return (
    <Block paddingHorizontal={16}>
      <Header title="InfoScreen" />
      <Button
        title="Đăng nhập tại đây"
        onPress={() => navigation.navigate(routes.SEND_EMAIL)}
      />
    </Block>
  );
};

export default InfoScreen;
