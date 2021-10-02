import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  title: {
    fontSize: getSize.m(18),
    fontWeight: 'bold',
    color: theme.colors.blue,
  },
  image: {
    top: 15,
    zIndex: 1,
    resizeMode: 'cover',
    position: 'absolute',
  },
  item: {
    marginVertical: getSize.m(8),
    paddingHorizontal: getSize.m(16),
  },
});
