import {useTheme, makeStyles} from '@theme';
import {useSelector} from 'react-redux';
import {getSize} from '@utils/responsive';
import React, {useEffect, useRef} from 'react';
import {Animated, Pressable, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
  Chart,
  Equipment,
  Food,
  Home,
  Info,
  Notification,
  Search,
} from '@assets/icons';
import {routes} from '@navigation/routes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Block} from '@components';

const CustomTabBar = ({state, descriptors, navigation, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const totalNotification = 0;
  const TabItem = ({icon, active, onPress, index, keyItem, label}) => {
    const animation = new Animated.Value(0);
    const viewRef = useRef();
    const labelTranslate = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [25, 0],
    });
    useEffect(() => {
      try {
        if (active) {
          viewRef.current.animate({
            0: {scale: 1, rotate: '0deg'},
            1: {scale: 1.5, rotate: '360deg'},
          });
        }
        if (state.history.length > 0) {
          if (keyItem === state.history[state.history.length - 2].key) {
            viewRef.current.animate({
              0: {scale: 1.5, rotate: '360deg'},
              1: {scale: 1, rotate: '0deg'},
            });
          }
        }
      } catch {
        e => console.log(e);
      }
    }, [active, index, keyItem]);
    Animated.spring(animation, {
      toValue: active ? 1 : 0,
      stiffness: 100,
      useNativeDriver: true,
    }).start();

    return (
      <TouchableOpacity onPress={onPress} activeOpacity={1}>
        <Animated.View style={styles.container}>
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
          <Animatable.View
            ref={viewRef}
            animation={active ? 'zoomIn' : null}
            duration={1000}>
            {icon}
          </Animatable.View>
        </Animated.View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.bar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;
        const color = isFocused ? theme.colors.blue : theme.colors.gray;
        const iconTab =
          route.name === routes.HOME_SCREEN ? (
            <Food color={color} />
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
            keyItem={route.key}
            key={index}
            icon={iconTab}
            active={isFocused}
            index={index}
            label={isFocused ? label : null}
            onPress={onPress}
            {...props}
          />
        );
      })}
      <View style={styles.top}>
        <Pressable onPress={() => navigation.navigate(routes.SEARCH_SCREEN)}>
          <Search color={theme.colors.blue} />
        </Pressable>
      </View>
      <View style={styles.bottom}>
        <Pressable onPress={() => navigation.navigate(routes.BOTTOM_TAB)}>
          <Home color={theme.colors.blue} />
        </Pressable>
      </View>
    </View>
  );
};

export const useStyles = makeStyles()(({colors}) => ({
  bar: {
    flexDirection: 'column',
    backgroundColor: colors.bar,
    padding: getSize.m(12),
    width: getSize.m(80),
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    height: getSize.s(60),

    marginBottom: getSize.s(20),
  },
  label: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: getSize.m(12),
    position: 'absolute',
    top: -7,
  },
  cover: {
    height: getSize.s(40),
    borderRadius: getSize.m(8),
    backgroundColor: colors.blue,
  },
  centered: {
    height: getSize.s(20),
    width: getSize.s(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    position: 'absolute',
    top: 40,
  },
  bottom: {
    position: 'absolute',
    bottom: 20,
  },
}));

export default CustomTabBar;
