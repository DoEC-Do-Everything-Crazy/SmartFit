import React, {useEffect} from 'react';

import {Host} from 'react-native-portalize';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';
import {StatusBar} from 'react-native';
import {changeRouteScreen} from 'reduxs/reducers';
import {routes} from './routes';
import {useDispatch} from 'react-redux';

const AppContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeRouteScreen(routes.INFO_SCREEN));
  }, [dispatch]);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent
      />
      <Host>
        <RootStack />
      </Host>
    </NavigationContainer>
  );
};

export default AppContainer;
