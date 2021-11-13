import {Header, InviteLogin} from '@components';

import Information from './components/Infomation';
import React from 'react';
import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';

const InfoScreen = () => {
  const {user} = useSelector(state => state.root.user);

  return (
    <>
      {/* {user ? ( */}
      <Information />
      {/* // ) : (
      //   <>
      //     <Header title="Infomation" />
      //     <InviteLogin
      //       // navigate={routes.LOGIN_SCREEN}
      //       navigate={routes.ENTER_PHONE_NUMBER_SCREEN}
      //       routes={routes.INFO_SCREEN}
      //     />
      //   </>
      // )} */}
    </>
  );
};

export default InfoScreen;
