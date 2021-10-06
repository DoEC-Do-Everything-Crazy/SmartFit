import {Block, Header} from '@components';
import {useTheme} from '@theme';
import React from 'react';
import CategorySort from './components/CategorySort';
import ListNotification from './components/ListNotification';
import {useStyles} from './styles';
import {InviteLogin} from '@components';
import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';

const NotificationScreen = props => {
  const {
    theme: {theme: themeStore},
    user: {user},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  return (
    <Block
      flex
      backgroundColor={
        JSON.stringify(user) !== '{}' ? theme.colors.blue : null
      }>
      <Header
        type={JSON.stringify(user) !== '{}' ? 'Bottom' : ''}
        title="Notifications"
        colorTheme={theme.colors.white}
      />
      {JSON.stringify(user) !== '{}' ? (
        <>
          <CategorySort />
          <Block flex>
            <Block
              flex
              style={styles.container}
              backgroundColor={theme.colors.background}>
              <ListNotification />
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
