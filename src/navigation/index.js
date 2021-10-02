import React, {useEffect, useState} from 'react';

import AuthStack from './AuthStack';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import navigators
import {Host} from 'react-native-portalize';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';
// firebase auth
import {StatusBar} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {changeRouteScreen} from 'reduxs/reducers';
import {routes} from './routes';

const AppContainer = () => {
  // // Set an initializing state whilst Firebase connects
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // // Handle user state changes
  // function onAuthStateChanged(usr) {
  //   console.log('AAAAAAA');
  //   if (usr) {
  //     setUser(usr);
  //     console.log('user', usr);
  //   } else {
  //     setUser(null);
  //   }

  //   if (initializing) {
  //     setInitializing(false);
  //   }
  // }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeRouteScreen(routes.INFO_SCREEN));
  }, [dispatch]);
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) {
  //   return null;
  // }

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
