import {StyleSheet} from 'react-native';
import {getSize, width} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  image: {
    width: getSize.s(80),
    height: getSize.s(100),
    borderRadius: getSize.m(16),
  },
  icon: {
    width: getSize.s(15),
    height: getSize.s(15),
  },
});
