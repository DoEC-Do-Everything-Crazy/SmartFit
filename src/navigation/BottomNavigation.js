import CustomTabBar from '@navigation/CustomTabBar';
import {routes} from '@navigation/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottom} from '@screens/Bottom';
import React from 'react';
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name={routes.HOMESCREEN} component={bottom.HOMESCREEN} />
      <Tab.Screen
        name={routes.PRODUCTSCREEN}
        component={bottom.PRODUCTSCREEN}
      />
      <Tab.Screen name={routes.CARTSCREEN} component={bottom.CARTSCREEN} />
      <Tab.Screen name={routes.BILLSCREEN} component={bottom.BILLSCREEN} />
      <Tab.Screen name={routes.INFOSCREEN} component={bottom.INFOSCREEN} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
