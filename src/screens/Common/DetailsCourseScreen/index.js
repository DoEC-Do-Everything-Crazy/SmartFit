import {Block, Header} from '@components';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {theme} from '@theme';
import React from 'react';
import CustomTabBar from './components/CustomTabBar';
import TabDetails from './components/TabScreen/TabDetails';
import TabLesson from './components/TabScreen/TabLesson';
import {routes} from '@navigation/routes';

const Tab = createMaterialTopTabNavigator();

const DetailsCourseScreen = () => {
  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Header canGoBack cart title="Cource" colorTheme={theme.colors.blue} />
      <Tab.Navigator
        lazy
        swipeEnabled={false}
        tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen
          options={{
            tabBarLabel: 'Details',
          }}
          name={routes.TAB_DETAILS}
          component={TabDetails}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Lessons',
          }}
          name={routes.TAB_LESSSON}
          component={TabLesson}
        />
      </Tab.Navigator>
    </Block>
  );
};

export default DetailsCourseScreen;
