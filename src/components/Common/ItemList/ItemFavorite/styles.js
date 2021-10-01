import {getSize, width} from '@utils/responsive';
import {StyleSheet} from 'react-native';
import {theme} from '@theme';

export default StyleSheet.create({
  image: {
    position: 'absolute',
    width: (width - 96) / 2,
    height: (width - 96) / 2,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: getSize.s(8),
    marginTop: getSize.s(50),
    paddingTop: getSize.s(80),
    paddingBottom: getSize.s(32),
    paddingHorizontal: getSize.s(16),
    width: (width - 48) / 2,
    backgroundColor: theme.colors.white,
  },
  iconHeart: {
    width: getSize.s(16),
    height: getSize.s(16),
    position: 'absolute',
    bottom: getSize.s(16),
    right: getSize.s(8),
  },
});
