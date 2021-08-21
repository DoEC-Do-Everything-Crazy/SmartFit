import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    height: getSize.s(130),
    width: width - 32,
    borderRadius: getSize.s(10),
  },
  title: {
    position: 'absolute',
    bottom: getSize.s(10),
    marginLeft: getSize.s(32),
  },
});
