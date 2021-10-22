import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {auth} from '@screens/Auth';
import {bottom} from '@screens/Bottom';
import {common} from '@screens/Common';
import React from 'react';
import BottomNavigation from './BottomNavigation';
import BottomTab from './BottomTab/BottomTab';
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
        name={routes.UPDATE_PROFILE_SCREEN}
        component={auth.UPDATE_PROFILE_SCREEN}
      />
      {/* LIST */}
      <Stack.Screen
        name={routes.COURSE_LIST_SCREEN}
        component={common.COURSE_LIST_SCREEN}
      />
      <Stack.Screen
        name={routes.PRODUCT_LIST_SCREEN}
        component={common.PRODUCT_LIST_SCREEN}
      />
      <Stack.Screen
        name={routes.FOOD_LIST_SCREEN}
        component={common.FOOD_LIST_SCREEN}
      />
      <Stack.Screen
        name={routes.COURSE_LIST_TYPE_SCREEN}
        component={common.COURSE_LIST_TYPE_SCREEN}
      />
      {/* FEATURE INFO */}
      <Stack.Screen
        name={routes.YOUR_FAVORITE_SCREEN}
        component={common.YOUR_FAVORITE_SCREEN}
      />
      <Stack.Screen
        name={routes.SETTING_SCREEN}
        component={common.SETTING_SCREEN}
      />
      <Stack.Screen
        name={routes.ORDER_SCREEN}
        component={common.ORDER_SCREEN}
      />

      {/* DETAILS */}
      <Stack.Screen
        name={routes.DETAILS_COURSE_SCREEN}
        component={common.DETAILS_COURSE_SCREEN}
      />
      <Stack.Screen
        name={routes.ORDER_DETAIL_SCREEN}
        component={common.ORDER_DETAIL_SCREEN}
      />
      <Stack.Screen
        name={routes.FOOD_DETAILS_SCREEN}
        component={common.FOOD_DETAILS_SCREEN}
      />
      <Stack.Screen
        name={routes.PRODUCT_DETAIL_SCREEN}
        component={common.PRODUCT_DETAIL_SCREEN}
      />

      {/* FEATURE SETTING */}
      <Stack.Screen
        name={routes.CHANGE_PASSWORD}
        component={common.CHANGE_PASSWORD}
      />
      <Stack.Screen
        name={routes.CHANGE_PIN_CODE}
        component={common.CHANGE_PIN_CODE}
      />

      {/* OTHER */}

      <Stack.Screen
        name={routes.FILTER_SCREEN}
        component={common.FILTER_SCREEN}
      />
      <Stack.Screen name={routes.CART_SCREEN} component={common.CART_SCREEN} />

      <Stack.Screen name={routes.RATE_SCREEN} component={common.RATE_SCREEN} />

      {/* Tabs */}
      <Stack.Screen name={routes.TAB_DETAILS} component={common.TAB_DETAILS} />
      <Stack.Screen name={routes.TAB_LESSON} component={common.TAB_LESSON} />
    </Stack.Navigator>
  );
};

export default RootStack;
