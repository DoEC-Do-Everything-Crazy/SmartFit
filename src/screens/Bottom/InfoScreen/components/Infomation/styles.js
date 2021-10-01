import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  container: {
    borderTopLeftRadius: getSize.m(16),
    borderTopRightRadius: getSize.m(16),
  },
  button: {
    backgroundColor: theme.colors.white,
    height: 55,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    borderRadius: 8,
  },
});
