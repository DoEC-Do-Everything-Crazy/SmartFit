import CustomTabBar from '@navigation/CustomTabBar';
import {routes} from '@navigation/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottom} from '@screens/Bottom';
import React from 'react';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name={routes.HOME_SCREEN} component={bottom.HOME_SCREEN} />
      <Tab.Screen
        name={routes.PRODUCT_SCREEN}
        component={bottom.PRODUCT_SCREEN}
      />
      <Tab.Screen name={routes.CART_SCREEN} component={bottom.CART_SCREEN} />
      <Tab.Screen name={routes.INFO_SCREEN} component={bottom.INFO_SCREEN} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
