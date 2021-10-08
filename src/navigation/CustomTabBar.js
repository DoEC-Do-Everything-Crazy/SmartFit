import LinearGradient from 'react-native-linear-gradient';
import {useTheme, makeStyles} from '@theme';
import {useSelector} from 'react-redux';
import {getSize} from '@utils/responsive';
import React from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {routes} from './routes';
import {Chart, Home, Info, Notification, Search} from '@assets/icons';

const CustomTabBar = ({state, descriptors, navigation, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
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
      outputRange: [5, 0],
    });

    const labelTranslate = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [25, 0],
    });

    const translateX = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [25, 0],
    });

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Animated.View style={styles.container}>
          <Animated.View
            style={[StyleSheet.absoluteFill, {transform: [{translateX}]}]}>
            <Animated.View style={[styles.cover, {opacity: animation}]} />
          </Animated.View>
          <Animated.View
            style={{
              transform: [{translateX: iconTranslate}],
              opacity: active ? 1 : 0.5,
            }}>
            {icon}
          </Animated.View>
          <Animated.View
            style={[
              styles.centered,
              {transform: [{translateX: labelTranslate}]},
            ]}>
            {active ? (
              <Animated.Text style={styles.label}>
                {index === 3
                  ? totalNotification > 0
                    ? `${label} (${totalNotification || 0})`
                    : label
                  : label}
              </Animated.Text>
            ) : null}
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <View style={styles.bar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;
        const isFocused = state.index === index;
        const color = isFocused ? theme.colors.white : theme.colors.lightText;
        const iconTab =
          route.name === routes.HOME_SCREEN ? (
            <Home color={color} />
          ) : route.name === routes.SEARCH_SCREEN ? (
            <Search color={color} />
          ) : route.name === routes.STATS_SCREEN ? (
            <Chart color={color} />
          ) : route.name === routes.NOTIFICATION_SCREEN ? (
            <Notification color={color} />
          ) : (
            <Info color={color} />
          );

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

export const useStyles = makeStyles()(({colors}) => ({
  bar: {
    flexDirection: 'row',
    backgroundColor: colors.bar,
    padding: getSize.m(12),
    paddingBottom: getSize.m(15),
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: getSize.s(40),
    paddingHorizontal: getSize.m(4),
  },
  label: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: getSize.m(12),
    marginLeft: getSize.m(5),
  },
  cover: {
    height: getSize.s(40),
    borderRadius: getSize.m(8),
    backgroundColor: colors.blue,
  },
}));

export default CustomTabBar;
