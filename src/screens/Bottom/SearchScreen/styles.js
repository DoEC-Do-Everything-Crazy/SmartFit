import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerInputStyle: {
    width: '100%',
    height: getSize.m(48),
    marginBottom: getSize.m(10),
  },
  inputStyle: {
    height: getSize.m(48),
    paddingLeft: getSize.m(16),
    backgroundColor: `${theme.colors.gray}40`,
    borderWidth: 0,
  },
  iconSeach: {
    height: getSize.s(24),
    width: getSize.s(24),
    marginRight: getSize.m(10),
    tintColor: theme.colors.yellowFood,
  },
});
