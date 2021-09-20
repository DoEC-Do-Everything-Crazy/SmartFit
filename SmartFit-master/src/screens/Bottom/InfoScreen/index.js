import React, {useState} from 'react';
import Information from './components/Infomation';
import InviteLogin from './components/InviteLogin';

const InfoScreen = () => {
  const [isLogined, setIsLogined] = useState(true);

  return isLogined ? <Information /> : <InviteLogin />;
};

export default InfoScreen;
