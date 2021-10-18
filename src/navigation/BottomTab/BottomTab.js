import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import CustomTabBar from './CustomTabBar';
import {routes} from '@navigation/routes';
import {common} from '@screens/Common';

const TabArr = [
  {
    route: routes.HOME_SCREEN,
    label: 'Food',
    component: common.PRODUCT_LIST_SCREEN,
  },
  {
    route: 'Like',
    label: 'Like',
    component: common.PRODUCT_LIST_SCREEN,
  },
  {
    route: 'Search',
    label: 'Search',
    component: common.PRODUCT_LIST_SCREEN,
  },
  {
    route: 'Account',
    label: 'Account',
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
