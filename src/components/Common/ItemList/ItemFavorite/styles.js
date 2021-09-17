import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    width: getSize.s(100),
    height: getSize.s(100),
  },
  iconHeart: {
    position: 'absolute',
    right: getSize.s(-16),
    bottom: getSize.s(-6),
    width: getSize.s(14),
    height: getSize.s(14),
  },
});
