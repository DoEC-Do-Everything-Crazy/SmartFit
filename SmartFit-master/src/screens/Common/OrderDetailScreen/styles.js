import {getSize, width} from '@utils/responsive';
import {StyleSheet, Platform} from 'react-native';
import {theme} from '@theme';

export default StyleSheet.create({
  item: {
    width: width,
    height: '100%',
  },
  itemReorder: {
    width: width / 2.2,
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 5,
  },
  itemLeave: {
    width: width / 2.2,
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 5,
    backgroundColor: theme.colors.red,
  },
  itemHeader: {
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 12,
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
    height: 240,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
