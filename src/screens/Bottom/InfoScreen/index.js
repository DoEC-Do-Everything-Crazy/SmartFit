import {Block, Header, Button} from '@components';
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';
import {theme} from '@theme';

const InfoScreen = () => {
  const navigation = useNavigation();

  return (
    <Block paddingHorizontal={16}>
      <Header title="InfoScreen" colorTheme={theme.colors.blue} />
      <Button
        title="Đăng nhập tại đây"
        onPress={() => navigation.navigate(routes.ENTER_PHONE_NUMBER_SCREEN)}
      />
    </Block>
  );
};

export default InfoScreen;
