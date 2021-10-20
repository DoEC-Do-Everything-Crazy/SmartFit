import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import CustomTabBar from './CustomTabBar';
import {routes} from '@navigation/routes';
import {common} from '@screens/Common';

const TabArr = [
  {
    route: routes.EQUIPMENT_SCREEN,
    label: routes.EQUIPMENT_SCREEN,
    component: common.PRODUCT_LIST_SCREEN,
  },
  {
    route: routes.SUPPLEMENTS_SCREEN,
    label: routes.SUPPLEMENTS_SCREEN,
    component: common.PRODUCT_LIST_SCREEN,
  },
  {
    route: routes.CLOTHING_SCREEN,
    label: routes.CLOTHING_SCREEN,
    component: common.PRODUCT_LIST_SCREEN,
  },
];

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            name={item.route}
            component={item.component}
            options={{
              tabBarLabel: item.label,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTab;
