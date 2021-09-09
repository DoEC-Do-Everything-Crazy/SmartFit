import {Block, Button, Header} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React from 'react';

const InviteLogin = () => {
  const navigation = useNavigation();
  return (
    <Block>
      <Header title="InfoScreen" colorTheme={theme.colors.blue} />
      <Button
        title="Đăng nhập tại đây"
        onPress={() => navigation.navigate(routes.ENTER_PHONE_NUMBER_SCREEN)}
      />
    </Block>
  );
};

export default InviteLogin;
