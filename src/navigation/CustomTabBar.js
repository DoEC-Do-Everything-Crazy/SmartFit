import {icons} from '@assets';
import {Block} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';

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
            ? icons.home
            : index === 2
            ? icons.home
            : index === 3
            ? icons.home
            : icons.home;

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
            <Image source={icon} style={styles.iconstyle(isFocused)} />
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
