import {Header, InviteLogin} from '@components';

import Information from './components/Information';
import React from 'react';
import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

const InfoScreen = () => {
  const {user} = useSelector(state => state.root.user);
  const {t} = useTranslation();

  return (
    <>
      {user ? (
        <Information />
      ) : (
        <>
          <Header title={t('information')} />
          <InviteLogin
            navigate={routes.LOGIN_SCREEN}
            routes={routes.INFO_SCREEN}
          />
        </>
      )}
    </>
  );
};

export default InfoScreen;
