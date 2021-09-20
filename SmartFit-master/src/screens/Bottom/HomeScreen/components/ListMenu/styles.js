import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';

export default StyleSheet.create({
  container: {
    borderTopLeftRadius: getSize.m(16),
    borderTopRightRadius: getSize.m(16),
  },
});
