import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {routes} from '../navigation/routes';
import BottomNavigation from './BottomNavigation';
import {auth} from '@screens/Auth';
import {bottom} from '@screens/Bottom';
import {common} from '@screens/Common';
import {Host} from 'react-native-portalize';
const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent
      />
      <Host>
        <Stack.Navigator
          mode="modal"
          initialRouteName={routes.ORDER_SCREEN}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name={routes.BOTTOM_TAB} component={BottomNavigation} />
          <Stack.Screen
            name={routes.HOME_SCREEN}
            component={bottom.HOME_SCREEN}
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
            name={routes.NOTIFICATION_SCREEN}
            component={bottom.NOTIFICATION_SCREEN}
          />
          <Stack.Screen
            name={routes.ENTER_PHONE_NUMBER_SCREEN}
            component={auth.ENTER_PHONE_NUMBER_SCREEN}
          />
          <Stack.Screen name={routes.SEND_EMAIL} component={auth.SEND_EMAIL} />
          <Stack.Screen
            name={routes.VFT_PHONE_NUMBER_SCREEN}
            component={auth.VFT_PHONE_NUMBER_SCREEN}
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
          <Stack.Screen
            name={routes.COURSE_SCREEN}
            component={bottom.COURSE_SCREEN}
          />
          <Stack.Screen
            name={routes.COURSE_LIST_SCREEN}
            component={common.COURSE_LIST_SCREEN}
          />
          <Stack.Screen
            name={routes.DETAILS_COURSE_SCREEN}
            component={common.DETAILS_COURSE_SCREEN}
          />
          <Stack.Screen
            name={routes.PRODUCT_LIST_SCREEN}
            component={common.PRODUCT_LIST_SCREEN}
          />
          <Stack.Screen
            name={routes.FOOD_LIST_SCREEN}
            component={bottom.FOOD_LIST_SCREEN}
          />
          <Stack.Screen
            name={routes.SEARCH_SCREEN}
            component={bottom.SEARCH_SCREEN}
          />
          <Stack.Screen
            name={routes.ONBOARD_SCREEN}
            component={common.ONBOARD_SCREEN}
          />
          <Stack.Screen
            name={routes.ORDER_SCREEN}
            component={common.ORDER_SCREEN}
          />
          <Stack.Screen
            name={routes.ORDER_DETAIL_SCREEN}
            component={common.ORDER_DETAIL_SCREEN}
          />
          <Stack.Screen
            name={routes.FILTER_SCREEN}
            component={common.FILTER_SCREEN}
          />
          <Stack.Screen
            name={routes.FOOD_DETAILS_SCREEN}
            component={common.FOOD_DETAILS_SCREEN}
          />
          <Stack.Screen
            name={routes.CART_SCREEN}
            component={common.CART_SCREEN}
          />
          {/* Tabs */}
          <Stack.Screen
            name={routes.TAB_DETAILS}
            component={common.TAB_DETAILS}
          />
          <Stack.Screen
            name={routes.TAB_LESSON}
            component={common.TAB_LESSON}
          />
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
};

export default RootStack;
