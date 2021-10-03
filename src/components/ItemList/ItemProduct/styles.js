import {getSize, width} from '@utils/responsive';
import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  image: {
    position: 'absolute',
    bottom: -32,
    left: -16,
    alignSelf: 'center',
    width: getSize.s(100),
    height: getSize.s(100),
  },
  iconPlus: {
    width: getSize.s(14),
    height: getSize.s(14),
  },
});
