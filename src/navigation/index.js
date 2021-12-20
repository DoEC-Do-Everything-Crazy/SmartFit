import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Host} from 'react-native-portalize';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';
import {StatusBar} from 'react-native';
import {changeRouteScreen} from 'reduxs/reducers';
import {routes} from './routes';

const AppContainer = () => {
  const dispatch = useDispatch();

  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);

  useEffect(() => {
    dispatch(changeRouteScreen(routes.INFO_SCREEN));
  }, [dispatch]);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={`${themeStore === 'dark' ? 'light' : 'dark'}-content`}
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
