import {lotties} from '@assets';
import {Block, Button, Empty, Text} from '@components';

import {useNavigation} from '@react-navigation/core';
import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeRouteScreen} from 'reduxs/reducers';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const InviteLogin = ({navigate, routes, props}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleOpenLogIn = useCallback(() => {
    navigation.navigate(navigate);
    routes ? dispatch(changeRouteScreen(routes)) : null;
  }, [dispatch, navigate, navigation, routes]);
  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Block style={styles.renderRoot}>
        <Block flex>
          <Empty lottie={lotties.login} />
        </Block>
        <Block flex>
          <Text style={styles.renderTitle}>Requires login</Text>
          <Text style={styles.renderText}>
            Please log in to connect and use SmartFit's services
          </Text>
        </Block>
      </Block>
      <Button title="LOG IN" onPress={handleOpenLogIn} />
    </Block>
  );
};

export default InviteLogin;
