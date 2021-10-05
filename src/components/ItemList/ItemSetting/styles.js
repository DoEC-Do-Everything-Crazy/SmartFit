import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  floatComponent: {
    backgroundColor: theme.colors.background,
  },
  textInput: {
    paddingHorizontal: getSize.m(16),
  },
  text: {
    color: theme.colors.red,
    fontSize: 14,
    position: 'relative',
    bottom: '-8%',
    left: '4%',
  },
  changePass: {
    borderTopLeftRadius: getSize.m(5),
    borderTopRightRadius: getSize.m(5),
  },
});
