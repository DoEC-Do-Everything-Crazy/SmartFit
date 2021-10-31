import {routes} from '@navigation/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {list} from '@screens/List';
import CustomTabBar from './CustomTabBar';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const {t} = useTranslation();
  const TabArr = [
    {
      route: routes.EQUIPMENT_SCREEN,
      label: t('equip'),
      component: list.PRODUCT_LIST_SCREEN,
      type: 'equipments',
    },
    {
      route: routes.SUPPLEMENTS_SCREEN,
      label: t('supple'),
      component: list.PRODUCT_LIST_SCREEN,
      type: 'supplements',
    },
    {
      route: routes.CLOTHING_SCREEN,
      label: t('clothing'),
      component: list.PRODUCT_LIST_SCREEN,
      type: 'clothingAndAccessories',
    },
  ];

  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            name={item.route}
            component={item.component}
            initialParams={{type: item.type}}
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
