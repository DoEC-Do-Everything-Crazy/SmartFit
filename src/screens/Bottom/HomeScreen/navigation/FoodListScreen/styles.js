import {getSize, width} from '@utils/responsive';
import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  item: {
    width: width - 60,
    height: 180,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    width: width,
    height: 180,
    resizeMode: 'contain',
  },
});
