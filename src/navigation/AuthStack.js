import React from 'react';

// import BottomNavigation from './BottomNavigation';
// import {Host} from 'react-native-portalize';
// import {NavigationContainer} from '@react-navigation/native';
// import {StatusBar} from 'react-native';
import {auth} from '@screens/Auth';
// import {bottom} from '@screens/Bottom';
// import {common} from '@screens/Common';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from './routes';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      mode="modal"
      initialRouteName={routes.FLASH_SCREEN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.LOGIN_SCREEN} component={auth.LOGIN_SCREEN} />
      <Stack.Screen
        name={routes.ENTER_PHONE_NUMBER_SCREEN}
        component={auth.ENTER_PHONE_NUMBER_SCREEN}
      />
      <Stack.Screen
        name={routes.SEND_EMAIL_SCREEN}
        component={auth.SEND_EMAIL_SCREEN}
      />
      <Stack.Screen
        name={routes.VFT_PHONE_NUMBER_SCREEN}
        component={auth.VFT_PHONE_NUMBER_SCREEN}
      />
      <Stack.Screen
        name={routes.UPDATE_PROFILE_SCREEN}
        component={auth.UPDATE_PROFILE_SCREEN}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
