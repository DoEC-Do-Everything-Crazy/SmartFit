import {Block, Header} from '@components';
import {theme} from '@theme';
import React from 'react';
import CategorySort from './components/CategorySort';
import ListNotification from './components/ListNotification';
import styles from './styles';

const NotificationScreen = () => {
  return (
    <Block flex backgroundColor={theme.colors.blue}>
      <Header title="Notifications" colorTheme={theme.colors.white} />
      <CategorySort />
      <Block flex style={styles.container} backgroundColor={theme.colors.white}>
        <ListNotification />
      </Block>
    </Block>
  );
};

export default NotificationScreen;
