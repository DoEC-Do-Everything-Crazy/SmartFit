import React from 'react';
import {auth} from '@screens/Auth';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from './routes';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      mode="modal"
      initialRouteName={routes.SPLASH_SCREEN}
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
