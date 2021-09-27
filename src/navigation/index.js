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

const AppContainer = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(usr) {
    console.log('AAAAAAA');
    if (usr) {
      setUser(usr);
    } else {
      setUser(null);
    }
    console.log('user', user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '879619453458-gd5qkvo0e2spndn433bvjcslpvreoc4l.apps.googleusercontent.com',
    });

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent
      />
      <Host>{user ? <RootStack /> : <AuthStack />}</Host>
    </NavigationContainer>
  );
};

export default AppContainer;
