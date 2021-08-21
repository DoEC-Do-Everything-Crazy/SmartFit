import {getSize, width} from '@utils/responsive';
import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  image: {
    alignSelf: 'center',
    marginTop: getSize.m(15),
    width: getSize.s(130),
    height: getSize.s(130),
  },
  iconHeart: {
    width: getSize.s(14),
    height: getSize.s(14),
  },
});
