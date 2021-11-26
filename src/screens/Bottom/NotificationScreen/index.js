import {Block, Header} from '@components';
import {useTheme} from '@theme';
import React from 'react';
import ListNotification from './components/ListNotification';
import {useStyles} from './styles';
import {InviteLogin} from '@components';
import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';

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
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={styles.sendControlContainerOuter}>
      <Block
        paddingBottom={10}
        flex
        backgroundColor={theme.colors.backgroundSetting}>
        <Header
          canGoBack
          cart
          title={
            valuePromotion === 0
              ? t('promotion')
              : t('promotion') + ' ' + valuePromotion + '%'
          }
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
    </SafeAreaView>
  );
};

export default NotificationScreen;
