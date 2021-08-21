import {StyleSheet} from 'react-native';
import {getSize, width} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  image: {
    borderRadius: getSize.m(5),
    width: getSize.s(64),
    height: getSize.s(64),
  },
});
