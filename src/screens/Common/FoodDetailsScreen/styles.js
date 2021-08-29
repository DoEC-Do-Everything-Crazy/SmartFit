import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderBottomLeftRadius: getSize.s(16),
    borderTopLeftRadius: getSize.s(16),
  },
  iconHeart: {
    position: 'absolute',
    right: getSize.m(16),
    top: getSize.m(16),
    width: getSize.s(24),
    height: getSize.s(24),
  },
  image: {
    marginTop: getSize.m(16),
    width: getSize.s(200),
    height: getSize.s(200),
  },
});
