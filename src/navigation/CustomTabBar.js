import {icons, images} from '@assets';
import {Block} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const TabBarAdvancedButton = ({icon, onPress, isFocused}) => (
  <Block style={styles.container}>
    <Block style={styles.background} backgroundColor="transparent">
      <Svg width={75} height={61} viewBox="0 0 75 61">
        <Path
          d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
          fill={'#fff'}
        />
      </Svg>
    </Block>
    <Pressable style={styles.button} onPress={onPress}>
      <Image
        source={icon}
        style={{...styles.iconstyle(isFocused), tintColor: theme.colors.white}}
      />
    </Pressable>
  </Block>
);

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <Block row alignCenter backgroundColor="transparent">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const icon =
          index === 0
            ? icons.home
            : index === 1
            ? icons.product
            : index === 2
            ? icons.cart
            : index === 3
            ? icons.bill
            : icons.info;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        if (index === 2) {
          return <TabBarAdvancedButton icon={icons.cart} onPress={onPress} />;
        }
        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.buttonCommon}>
            {/* {index === 2(<CustomTabBarButton />)} */}
            <Image source={icon} style={styles.iconstyle(isFocused)} />
            {/* <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text> */}
          </Pressable>
        );
      })}
    </Block>
  );
};

export default CustomTabBar;
const styles = StyleSheet.create({
  iconstyle: isFocused => ({
    width: getSize.s(22),
    height: getSize.s(22),
    resizeMode: 'contain',
    tintColor: isFocused ? theme.colors.blue : theme.colors.lightGray,
  }),
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: theme.colors.blue,
  },
  buttonCommon: {
    height: 48,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
});
