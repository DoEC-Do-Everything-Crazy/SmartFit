import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  resetStyles: {
    flex: 1,
    padding: 0,
    margin: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  defaultStyles: {
    fontFamily: theme.fonts.fontFamily.default,
    minHeight: getSize.m(38),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderColor: theme.colors.blue,
    backgroundColor: theme.colors.white,
    borderRadius: getSize.s(5),
    height: getSize.s(60),
  },
  leftIcon: {
    position: 'absolute',
    left: getSize.m(12),
    height: getSize.s(20),
    width: getSize.s(20),
  },
  rightIcon: {
    position: 'absolute',
    right: getSize.m(12),
  },
});
