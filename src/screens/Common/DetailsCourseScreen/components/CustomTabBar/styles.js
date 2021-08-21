import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btn: isFocused => ({
    width: (width - 32) / 2,
    height: getSize.s(48),
    borderRadius: getSize.m(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isFocused ? theme.colors.blue : theme.colors.white,
  }),
  txt: isFocused => ({
    color: isFocused ? theme.colors.white : theme.colors.blue,
    fontSize: getSize.s(14),
    fontWeight: theme.fonts.fontWeight.bold,
  }),
  container: {
    flexDirection: 'row',
    borderRadius: getSize.m(6),
    borderWidth: 1,
    borderColor: theme.colors.blue,
  },
});
