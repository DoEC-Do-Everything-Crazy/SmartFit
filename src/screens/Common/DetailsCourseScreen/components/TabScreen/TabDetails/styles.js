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
    borderRadius: 5,
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
  choosePT: {
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: getSize.m(5),
    width: getSize.m(80),
    height: getSize.m(20),
    backgroundColor: theme.colors.blue,
    color: theme.colors.white,
  },
  headerWrapper: {
    paddingHorizontal: getSize.m(16),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: getSize.s(15),
  },
  imageInf: {
    width: getSize.s(100),
    height: getSize.s(100),
    borderRadius: getSize.s(5),
  },
  bottomLayout: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: theme.colors.blue,
    height: getSize.m(48),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: getSize.m(20),
    borderRadius: getSize.m(8),
  },
  icon: {
    width: getSize.s(17),
    height: getSize.s(10),
  },
});
