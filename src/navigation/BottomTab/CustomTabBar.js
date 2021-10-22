import {useTheme, makeStyles} from '@theme';
import {useSelector, useDispatch} from 'react-redux';
import {getSize} from '@utils/responsive';
import React, {useCallback, useEffect, useRef} from 'react';
import {Animated, Pressable, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
  Clothing,
  EquipmentType,
  Home,
  Search,
  Supplements,
} from '@assets/icons';
import {routes} from '@navigation/routes';
import {getProductType} from 'reduxs/reducers';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomTabBar = ({state, descriptors, navigation, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const dispatch = useDispatch();
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const totalNotification = 0;

  const handleToHome = useCallback(() => {
    navigation.navigate(routes.BOTTOM_TAB);
  }, [navigation]);

  const handleToSearch = useCallback(() => {
    navigation.navigate(routes.SEARCH_SCREEN, {screen: 'screen'});
  }, [navigation]);

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
        const color = isFocused ? theme.colors.iconInf : theme.colors.gray;
        const iconTab =
          route.name === routes.EQUIPMENT_SCREEN ? (
            <EquipmentType color={color} />
          ) : route.name === routes.SUPPLEMENTS_SCREEN ? (
            <Supplements color={color} />
          ) : (
            <Clothing color={color} />
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
        <Pressable onPress={handleToSearch}>
          <Search color={theme.colors.iconInf} />
        </Pressable>
      </View>
      <View style={styles.bottom}>
        <Pressable onPress={handleToHome}>
          <Home color={theme.colors.iconInf} />
        </Pressable>
      </View>
    </View>
  );
};

export const useStyles = makeStyles()(({colors}) => ({
  bar: {
    flexDirection: 'column',
    backgroundColor: colors.bar,
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
    marginBottom: getSize.s(50),
  },

  label: {
    width: getSize.m(80),
    color: colors.iconInf,
    fontWeight: 'bold',
    fontSize: getSize.m(12),
    position: 'absolute',
    bottom: 15,
    textAlign: 'center',
  },
  centered: {
    height: getSize.s(60),
    width: getSize.s(90),
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
