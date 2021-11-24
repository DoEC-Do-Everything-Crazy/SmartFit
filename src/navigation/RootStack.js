import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {auth, bottom, details, list, other, setting} from '@screens';

import BottomNavigation from './BottomNavigation';
import BottomTab from './BottomTab/BottomTab';
import React from 'react';
import {routes} from './routes';

const Stack = createStackNavigator();
const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
};

const RootStack = () => {
  return (
    <Stack.Navigator
      mode="modal"
      initialRouteName={routes.SPLASH_SCREEN}
      screenOptions={options}>
      {/* BOTTOM */}
      <Stack.Screen name={routes.BOTTOM_TAB} component={BottomNavigation} />
      <Stack.Screen name={routes.BOTTOM_TAB_PRODUCT} component={BottomTab} />
      <Stack.Screen name={routes.HOME_SCREEN} component={bottom.HOME_SCREEN} />
      <Stack.Screen name={routes.INFO_SCREEN} component={bottom.INFO_SCREEN} />
      <Stack.Screen
        name={routes.STATS_SCREEN}
        component={bottom.STATS_SCREEN}
      />
      <Stack.Screen
        name={routes.NOTIFICATION_SCREEN}
        component={bottom.NOTIFICATION_SCREEN}
      />
      <Stack.Screen
        name={routes.SPLASH_SCREEN}
        component={auth.SPLASH_SCREEN}
      />
      <Stack.Screen
        name={routes.SEARCH_SCREEN}
        component={bottom.SEARCH_SCREEN}
      />
      <Stack.Screen
        name={routes.PASSWORD_SCREEN}
        component={auth.PASSWORD_SCREEN}
      />

      {/* AUTHENTICATION */}
      <Stack.Screen
        name={routes.ONBOARD_SCREEN}
        component={auth.ONBOARD_SCREEN}
      />
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
      <Stack.Screen name={routes.LOGIN_SCREEN} component={auth.LOGIN_SCREEN} />
      <Stack.Screen
        name={routes.REGISTER_SCREEN}
        component={auth.REGISTER_SCREEN}
      />
      <Stack.Screen
        name={routes.UPDATE_PROFILE_SCREEN}
        component={auth.UPDATE_PROFILE_SCREEN}
      />
      {/* LIST */}
      <Stack.Screen
        name={routes.COURSE_LIST_SCREEN}
        component={list.COURSE_LIST_SCREEN}
      />
      <Stack.Screen
        name={routes.PRODUCT_LIST_SCREEN}
        component={list.PRODUCT_LIST_SCREEN}
      />
      <Stack.Screen
        name={routes.FOOD_LIST_SCREEN}
        component={list.FOOD_LIST_SCREEN}
      />
      <Stack.Screen
        name={routes.COURSE_LIST_TYPE_SCREEN}
        component={list.COURSE_LIST_TYPE_SCREEN}
      />

      {/* DETAILS */}
      <Stack.Screen
        name={routes.COURSE_DETAILS_SCREEN}
        component={details.COURSE_DETAILS_SCREEN}
      />
      <Stack.Screen
        name={routes.ORDER_DETAIL_SCREEN}
        component={details.ORDER_DETAIL_SCREEN}
      />
      <Stack.Screen
        name={routes.FOOD_DETAILS_SCREEN}
        component={details.FOOD_DETAILS_SCREEN}
      />
      <Stack.Screen
        name={routes.PRODUCT_DETAIL_SCREEN}
        component={details.PRODUCT_DETAIL_SCREEN}
      />

      {/* Tabs */}
      <Stack.Screen name={routes.TAB_DETAILS} component={details.TAB_DETAILS} />
      <Stack.Screen name={routes.TAB_LESSON} component={details.TAB_LESSON} />

      {/*SETTING */}
      <Stack.Screen
        name={routes.SETTING_SCREEN}
        component={setting.SETTING_SCREEN}
      />
      <Stack.Screen
        name={routes.CHANGE_PASSWORD}
        component={setting.CHANGE_PASSWORD}
      />
      <Stack.Screen
        name={routes.CHANGE_PIN_CODE}
        component={setting.CHANGE_PIN_CODE}
      />

      {/* OTHER */}

      <Stack.Screen
        name={routes.FILTER_SCREEN}
        component={other.FILTER_SCREEN}
      />
      <Stack.Screen
        name={routes.YOUR_FAVORITE_SCREEN}
        component={other.YOUR_FAVORITE_SCREEN}
      />
      <Stack.Screen name={routes.CART_SCREEN} component={other.CART_SCREEN} />
      <Stack.Screen name={routes.ORDER_SCREEN} component={other.ORDER_SCREEN} />
      <Stack.Screen name={routes.RATE_SCREEN} component={other.RATE_SCREEN} />
      <Stack.Screen name={routes.TAKE_PICTURE} component={other.TAKE_PICTURE} />
      <Stack.Screen
        name={routes.PAYMENT_SCREEN}
        component={other.PAYMENT_SCREEN}
      />
      <Stack.Screen
        name={routes.DELIVERY_INFORMATION_SCREEN}
        component={other.DELIVERY_INFORMATION_SCREEN}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
