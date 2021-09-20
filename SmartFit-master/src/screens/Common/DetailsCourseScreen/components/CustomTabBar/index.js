import {Block, Text} from '@components';
import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';
import {theme} from '@theme';

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <Block
      row
      paddingHorizontal={16}
      paddingBottom={16}
      backgroundColor={theme.colors.background}>
      <Block style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

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
              style={styles.btn(isFocused)}>
              <Text style={styles.txt(isFocused)}>{label}</Text>
            </Pressable>
          );
        })}
      </Block>
    </Block>
  );
};

export default CustomTabBar;
