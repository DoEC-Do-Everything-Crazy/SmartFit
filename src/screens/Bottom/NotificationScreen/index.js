import {Block, Header} from '@components';
import {useTheme} from '@theme';
import React from 'react';
import ListNotification from './components/ListNotification';
import {useStyles} from './styles';
import {InviteLogin} from '@components';
import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

const NotificationScreen = ({route, props}) => {
  const {
    theme: {theme: themeStore},
    user: {user},
  } = useSelector(state => state.root);
  const {valuePromotion} = route.params;
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();

  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Header
        canGoBack
        cart
        title={t('promotion') + ' ' + valuePromotion + '%'}
        colorTheme={theme.colors.blue}
      />
      {JSON.stringify(user) !== '{}' ? (
        <>
          <Block flex>
            <Block flex backgroundColor={theme.colors.backgroundSetting}>
              <ListNotification valuePromotion={valuePromotion} />
            </Block>
          </Block>
        </>
      ) : (
        <InviteLogin
          navigate={routes.LOGIN_SCREEN}
          routes={routes.NOTIFICATION_SCREEN}
        />
      )}
    </Block>
  );
};

export default NotificationScreen;
