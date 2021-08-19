import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';

export default StyleSheet.create({
  image: {
    top: 15,
    zIndex: 1,
    width: getSize.s(125),
    height: getSize.s(165),
    position: 'absolute',
    borderRadius: getSize.m(15),
  },

  imageInfo: {
    tintColor: '#444C5C',
  },
});
