import {Block, Header} from '@components';
import {theme} from '@theme';
import React from 'react';
import CategorySort from './components/CategorySort';
import ListNotification from './components/ListNotification';
import styles from './styles';
import {InviteLogin} from '@components';
import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';

const NotificationScreen = () => {
  const {user} = useSelector(state => state.root.user);
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
