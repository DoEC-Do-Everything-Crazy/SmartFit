import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  swipeOut: {
    backgroundColor: 'transparent',
  },
  component_icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
});
