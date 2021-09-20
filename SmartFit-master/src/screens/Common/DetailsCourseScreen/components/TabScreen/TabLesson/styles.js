import {getSize, width} from '@utils/responsive';
import {StyleSheet, Platform} from 'react-native';
import {theme} from '@theme';

export default StyleSheet.create({
  item: {
    width: width,
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    backgroundColor: theme.colors.background,
  },
  image: {
    borderRadius: getSize.s(10),
    width: width,
    height: 240,
  },
});
