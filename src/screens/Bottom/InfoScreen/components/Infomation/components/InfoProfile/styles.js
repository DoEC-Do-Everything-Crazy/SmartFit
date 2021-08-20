import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    top: 14,
    left: 6,
    zIndex: 1,
    width: getSize.s(85),
    height: getSize.s(125),
    position: 'absolute',
    borderRadius: getSize.m(15),
  },

  imageInfo: {
    tintColor: '#444C5C',
  },
});
