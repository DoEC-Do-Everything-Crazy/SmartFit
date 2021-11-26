import {Block, Text} from '@components';
import React from 'react';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const CustomTabBar = ({state, descriptors, navigation, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

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
              canPreventDefault: true,
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

          const color = isFocused ? theme.colors.white : theme.colors.blue;
          const backgroundColor = isFocused
            ? theme.colors.blue
            : theme.colors.background;
          return (
            <Pressable
              key={index}
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[styles.btn, {backgroundColor}]}>
              <Text style={[styles.txt, {color}]}>{label}</Text>
            </Pressable>
          );
        })}
      </Block>
    </Block>
  );
};

export default CustomTabBar;
