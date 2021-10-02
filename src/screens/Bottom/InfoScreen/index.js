import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';
import React from 'react';
import Information from './components/Infomation';
import {InviteLogin, Header} from '@components';

const InfoScreen = () => {
  const {user} = useSelector(state => state.root.user);

  return (
    <>
      {JSON.stringify(user) !== '{}' ? (
        <>
          <Information />
        </>
      ) : (
        <>
          <Header title="Infomation" />
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
