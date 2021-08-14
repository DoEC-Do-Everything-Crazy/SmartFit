import {Block, Header} from '@components';
import {theme} from '@theme';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CategorySort from './component/CategorySort';
import ListNotification from './component/ListNotification';
import styles from './styles';

const NotificationScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Block flex backgroundColor={theme.colors.blue}>
      <Header cart title="Notifications" colorTheme={theme.colors.white} />
      <CategorySort />
      <Block flex style={styles.container} backgroundColor={theme.colors.white}>
        <ListNotification />
      </Block>
    </Block>
  );
};

export default NotificationScreen;
