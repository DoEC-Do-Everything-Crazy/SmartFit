import {Header, InviteLogin} from '@components';

import Information from './components/Information';
import React from 'react';
import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import {makeStyles} from '@theme';
const InfoScreen = props => {
  const {user} = useSelector(state => state.root.user);
  const {t} = useTranslation();
  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);
  return (
    <>
      {user ? (
        <Information />
      ) : (
        <SafeAreaView
          edges={['top', 'left', 'right']}
          style={styles.sendControlContainerOuter}>
          <Header title={t('information')} />
          <InviteLogin
            navigate={routes.LOGIN_SCREEN}
            routes={routes.INFO_SCREEN}
          />
        </SafeAreaView>
      )}
    </>
  );
};

export default InfoScreen;
export const useStyles = makeStyles()(({colors}) => ({
  sendControlContainerOuter: {
    flex: 1,
    backgroundColor: colors.border,
  },
}));
