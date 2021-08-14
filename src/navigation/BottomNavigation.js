import CustomTabBar from '@navigation/CustomTabBar';
import {routes} from '@navigation/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottom} from '@screens/Bottom';
import React from 'react';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name={routes.HOME_SCREEN}
        component={bottom.HOME_SCREEN}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name={routes.STATS_SCREEN}
        component={bottom.STATS_SCREEN}
        options={{
          tabBarLabel: 'Stats',
        }}
      />
      <Tab.Screen
        name={routes.NOTIFICATION_SCREEN}
        component={bottom.NOTIFICATION_SCREEN}
        options={{
          tabBarLabel: 'Notification',
        }}
      />
      <Tab.Screen
        name={routes.INFO_SCREEN}
        component={bottom.INFO_SCREEN}
        options={{
          tabBarLabel: 'Infomation',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
