import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {routes} from '../navigation/routes';
import BottomNavigation from './BottomNavigation';
import {auth} from '@screens/Auth';

const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent
      />
      <Stack.Navigator
        mode="modal"
        initialRouteName={routes.BOTTOM_TAB}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={routes.UPDATE_PROFILE}
          component={auth.UPDATE_PROFILE}
        />
      </Stack.Navigator>
      <Stack.Screen name={routes.BOTTOM_TAB} component={BottomNavigation} />
      <Stack.Screen name={routes.LOGIN_SCREEN} component={auth.LOGIN_SCREEN} />
      <Stack.Screen
        name={routes.SIGNUP_SCREEN}
        component={auth.SIGNUP_SCREEN}
      />
    </NavigationContainer>
  );
};

export default RootStack;
