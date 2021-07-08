import CustomTabBar from '@navigation/CustomTabBar';
import {routes} from '@navigation/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottom} from '@screens/Bottom';
import React from 'react';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name={routes.UPDATE_PROFILE} component={bottom.HOMESCREEN} />
      {/* <Tab.Screen name={routes.HOMESCREEN} component={bottom.HOMESCREEN} />
      <Tab.Screen name={routes.HOMESCREEN} component={bottom.HOMESCREEN} />
      <Tab.Screen name={routes.HOMESCREEN} component={bottom.HOMESCREEN} />
      <Tab.Screen name={routes.HOMESCREEN} component={bottom.HOMESCREEN} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
