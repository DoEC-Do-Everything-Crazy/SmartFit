import {StyleSheet} from 'react-native';
import {getSize, width} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  container: {
    marginTop: getSize.s(12),
    marginBottom: getSize.m(16),
  },
  image: {
    width: getSize.s(80),
    height: getSize.s(100),
    borderRadius: getSize.m(5),
  },
  icon: {
    width: getSize.s(15),
    height: getSize.s(15),
  },
  detail: {
    borderBottomRightRadius: getSize.m(5),
    borderTopLeftRadius: getSize.m(5),
  },
});
