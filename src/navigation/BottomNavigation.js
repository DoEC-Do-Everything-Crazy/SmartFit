import CustomTabBar from '@navigation/CustomTabBar';
import {routes} from '@navigation/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import {bottom} from '@screens/Bottom';
import React from 'react';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const {t} = useTranslation();
  const {routeScreen} = useSelector(state => state.root.screen);
  return (
    <Tab.Navigator
      initialRoute={routeScreen}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name={routes.HOME_SCREEN}
        component={bottom.HOME_SCREEN}
        options={{
          tabBarLabel: t('home'),
        }}
      />
      <Tab.Screen
        name={routes.SEARCH_SCREEN}
        component={bottom.SEARCH_SCREEN}
        initialParams={{screen: 'tab'}}
        options={{
          tabBarLabel: t('search'),
        }}
      />
      <Tab.Screen
        name={routes.STATS_SCREEN}
        component={bottom.STATS_SCREEN}
        options={{
          tabBarLabel: t('stats'),
        }}
      />
      {/* <Tab.Screen
        name={routes.NOTIFICATION_SCREEN}
        component={bottom.NOTIFICATION_SCREEN}
        options={{
          tabBarLabel: t('notification'),
        }}
      /> */}
      <Tab.Screen
        name={routes.INFO_SCREEN}
        component={bottom.INFO_SCREEN}
        options={{
          tabBarLabel: t('information'),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
