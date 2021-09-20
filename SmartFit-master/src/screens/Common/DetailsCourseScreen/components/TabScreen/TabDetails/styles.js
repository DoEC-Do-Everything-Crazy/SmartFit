import {getSize, width} from '@utils/responsive';
import {StyleSheet, Platform} from 'react-native';
import {theme} from '@theme';

export default StyleSheet.create({
  item: {
    paddingBottom: 20,
    width: width - 32,
    height: 200,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    position: 'absolute',
    borderRadius: getSize.s(10),
    width: width - 32,
    height: 200,
  },
  slider: {
    overflow: 'visible',
  },
  imageBG: {
    marginLeft: 10,
    width: width - 48,
    height: 200,
  },
});
