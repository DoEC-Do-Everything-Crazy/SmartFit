import {StyleSheet} from 'react-native';
import {getSize, width, height} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  button: {
    height: 60,
    backgroundColor: theme.colors.blue,
    borderRadius: 8,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
