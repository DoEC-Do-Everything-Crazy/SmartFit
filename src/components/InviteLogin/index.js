import {Block, Button, Empty, Text} from '@components';
import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {changeRouteScreen} from 'reduxs/reducers';
import {lotties} from '@assets';
import {useNavigation} from '@react-navigation/core';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

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
  const {t} = useTranslation();

  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Block style={styles.renderRoot}>
        <Block flex>
          <Empty lottie={lotties.login} />
        </Block>
        <Block flex>
          <Text style={styles.renderTitle}>{t('requiresLogin')}</Text>
          <Text style={styles.renderText}>{t('pleaseLogin')}</Text>
        </Block>
      </Block>
      <Button title={t('login')} onPress={handleOpenLogIn} />
    </Block>
  );
};

export default InviteLogin;
