import {StyleSheet} from 'react-native';
import {getSize, width} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  image: {
    height: getSize.s(200),
    width: width / 2.5,
    borderRadius: getSize.s(10),
  },
  title: {
    width: '100%',
    backgroundColor: `${theme.colors.black}40`,
    position: 'absolute',
    bottom: 0,
    paddingVertical: getSize.m(8),
    paddingHorizontal: getSize.m(16),
  },
});
