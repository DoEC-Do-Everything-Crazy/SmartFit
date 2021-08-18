/* eslint-disable react-native/no-inline-styles */
import {icons} from '@assets';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {routes} from './routes';

const TabItem = ({icon, label, active, onPress, index}) => {
  const totalNotification = 3;

  const animation = new Animated.Value(0);

  Animated.spring(animation, {
    toValue: active ? 1 : 0,
    stiffness: 100,
    useNativeDriver: true,
  }).start();

  const iconTranslate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [4, 0],
  });

  const labelTranslate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 0],
  });

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 0],
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={styles.container}>
        <Animated.View
          style={{
            transform: [{translateX: iconTranslate}],
            opacity: active ? 1 : 0.4,
          }}>
          <Image style={styles.icon} source={icon} resizeMode="contain" />
        </Animated.View>
        <Animated.View
          style={[
            styles.centered,
            {transform: [{translateX: labelTranslate}]},
          ]}>
          {active ? (
            <Animated.Text style={styles.label}>
              {index === 2
                ? totalNotification > 0
                  ? `${label} (${totalNotification || 0})`
                  : label
                : label}
            </Animated.Text>
          ) : null}
        </Animated.View>
        <Animated.View
          style={[StyleSheet.absoluteFill, {transform: [{translateX}]}]}>
          <Animated.View style={[styles.cover, {opacity: animation}]} />
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.bar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;
        const iconTab =
          route.name === routes.HOME_SCREEN
            ? icons.home
            : route.name === routes.STATS_SCREEN
            ? icons.stats
            : route.name === routes.NOTIFICATION_SCREEN
            ? icons.notification
            : icons.info;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TabItem
            key={index}
            icon={iconTab}
            label={isFocused ? label : null}
            active={isFocused}
            index={index}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: getSize.m(12),
    paddingBottom: getSize.m(25),
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: getSize.s(40),
    paddingHorizontal: getSize.m(4),
  },
  icon: {
    width: getSize.s(18),
    tintColor: 'blue',
  },
  label: {
    color: theme.colors.blue,
    fontSize: getSize.m(12),
    marginLeft: getSize.m(5),
    fontFamily: 'Quicksand-Medium',
  },
  cover: {
    height: getSize.s(40),
    borderRadius: getSize.m(8),
    backgroundColor: `${theme.colors.blue}30`,
  },
});

export default CustomTabBar;
