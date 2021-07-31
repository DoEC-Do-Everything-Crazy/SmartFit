import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {routes} from '../navigation/routes';
import BottomNavigation from './BottomNavigation';
import {auth} from '@screens/Auth';
import {bottom} from '@screens/Bottom';

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
        <Stack.Screen name={routes.BOTTOM_TAB} component={BottomNavigation} />
        <Stack.Screen
          name={routes.HOME_SCREEN}
          component={bottom.HOME_SCREEN}
        />
        <Stack.Screen
          name={routes.PRODUCT_SCREEN}
          component={bottom.PRODUCT_SCREEN}
        />
        <Stack.Screen
          name={routes.CART_SCREEN}
          component={bottom.CART_SCREEN}
        />
        <Stack.Screen
          name={routes.INFO_SCREEN}
          component={bottom.INFO_SCREEN}
        />
        <Stack.Screen
          name={routes.STATS_SCREEN}
          component={bottom.STATS_SCREEN}
        />
        <Stack.Screen
          name={routes.ENTER_PHONE_NUMBER_SCREEN}
          component={auth.ENTER_PHONE_NUMBER_SCREEN}
        />
        <Stack.Screen name={routes.SEND_EMAIL} component={auth.SEND_EMAIL} />
        <Stack.Screen
          name={routes.VFT_PHONENUMBER_SCREEN}
          component={auth.VFTPHONENUMBERSCREEN}
        />
        <Stack.Screen
          name={routes.LOGIN_SCREEN}
          component={auth.LOGIN_SCREEN}
        />
        <Stack.Screen
          name={routes.SIGNUP_SCREEN}
          component={auth.SIGNUP_SCREEN}
        />
        <Stack.Screen
          name={routes.UPDATE_PROFILE}
          component={auth.UPDATE_PROFILE}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
