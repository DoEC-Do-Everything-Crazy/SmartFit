import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import CustomTabBar from './CustomTabBar';
import {routes} from '@navigation/routes';
import {common} from '@screens/Common';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const {t} = useTranslation();
  const TabArr = [
    {
      route: routes.EQUIPMENT_SCREEN,
      label: t('equip'),
      component: common.PRODUCT_LIST_SCREEN,
    },
    {
      route: routes.SUPPLEMENTS_SCREEN,
      label: t('supple'),
      component: common.PRODUCT_LIST_SCREEN,
    },
    {
      route: routes.CLOTHING_SCREEN,
      label: t('clothing'),
      component: common.PRODUCT_LIST_SCREEN,
    },
  ];

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
