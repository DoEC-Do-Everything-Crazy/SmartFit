import {getSize, width} from '@utils/responsive';
import {StyleSheet, Platform} from 'react-native';
import {theme} from '@theme';

export default StyleSheet.create({
  item: {
    width: width,
    height: '100%',
  },
  itemHeader: {
    paddingVertical: getSize.s(5),
    paddingHorizontal: getSize.s(20),
    borderRadius: getSize.s(8),
    marginHorizontal: getSize.s(5),
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    backgroundColor: theme.colors.background,
  },
  image: {
    borderRadius: getSize.s(10),
    width: width,
    height: getSize.s(240),
  },
  text: {
    fontSize: getSize.s(18),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
