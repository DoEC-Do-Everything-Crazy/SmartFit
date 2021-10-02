import CustomTabBar from '@navigation/CustomTabBar';
import {routes} from '@navigation/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {bottom} from '@screens/Bottom';
import React from 'react';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const {routeScreen} = useSelector(state => state.root.screen);
  return (
    <Tab.Navigator
      initialRoute={routeScreen}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name={routes.HOME_SCREEN}
        component={bottom.HOME_SCREEN}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name={routes.SEARCH_SCREEN}
        component={bottom.SEARCH_SCREEN}
        options={{
          tabBarLabel: 'Search',
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
