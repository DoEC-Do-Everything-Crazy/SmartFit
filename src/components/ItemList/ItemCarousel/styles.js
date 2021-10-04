import {getSize, width} from '@utils/responsive';
import {StyleSheet, Platform} from 'react-native';
import {theme} from '@theme';

export default StyleSheet.create({
  image: {
    width: '100%',
    height: getSize.s(160),
    borderRadius: getSize.s(8),
  },

  heartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: getSize.s(140),
    right: getSize.s(5),
    backgroundColor: theme.colors.white,
    width: getSize.s(40),
    height: getSize.s(40),
    borderRadius: getSize.s(25),
  },
});
