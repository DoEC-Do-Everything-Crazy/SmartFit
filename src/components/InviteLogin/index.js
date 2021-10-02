import {Block, Button} from '@components';

import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {changeRouteScreen} from 'reduxs/reducers';

const InviteLogin = ({navigate, routes}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleOpenLogIn = useCallback(() => {
    navigation.navigate(navigate);
    routes ? dispatch(changeRouteScreen(routes)) : null;
  }, [dispatch, navigate, navigation, routes]);
  return (
    <Block>
      <Button title="LOG IN" onPress={handleOpenLogIn} />
    </Block>
  );
};

export default InviteLogin;
