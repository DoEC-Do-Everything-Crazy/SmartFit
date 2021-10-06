import {useMemo} from 'react';

import keys from 'lodash.keys';
import {StyleSheet} from 'react-native';

import {colors} from './color';
import {fonts} from './font';

export const theme = {
  light: {
    fonts,
    colors: colors.light,
  },
  dark: {
    fonts,
    colors: colors.dark,
  },
};

export const useTheme = themeStore => {
  return {fonts, colors: theme[themeStore].colors};
};

const createStyle = (styles, props) => {
  return keys(styles).reduce((results, key) => {
    if (typeof styles[key] === 'function') {
      results[key] = styles[key](props);
    } else {
      results[key] = styles[key];
    }
    return results;
  }, {});
};

export const makeStyles = () => styles => {
  return (props, themeStore) => {
    return useMemo(
      () =>
        StyleSheet.create({
          ...createStyle(
            typeof styles === 'function'
              ? styles({
                  ...theme[themeStore || 'light'],
                })
              : styles,
            props,
          ),
        }),
      [props, themeStore],
    );
  };
};
