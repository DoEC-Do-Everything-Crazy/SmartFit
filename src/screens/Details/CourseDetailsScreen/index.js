import {Block, Header} from '@components';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import React from 'react';
import CustomTabBar from './components/CustomTabBar';
import TabDetails from './components/TabScreen/TabDetails';
import TabLesson from './components/TabScreen/TabLesson';
import {routes} from '@navigation/routes';
import {useTranslation} from 'react-i18next';

const Tab = createMaterialTopTabNavigator();

const CourseDetailsScreen = () => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();
  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Header
        canGoBack
        cart
        title={t('course')}
        colorTheme={theme.colors.blue}
      />
      <Tab.Navigator
        lazy
        swipeEnabled={false}
        tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen
          options={{
            tabBarLabel: t('detail'),
          }}
          name={routes.TAB_DETAILS}
          component={TabLesson}
        />
        <Tab.Screen
          options={{
            tabBarLabel: t('lessons'),
          }}
          name={routes.TAB_LESSON}
          component={TabLesson}
        />
      </Tab.Navigator>
    </Block>
  );
};

export default CourseDetailsScreen;
