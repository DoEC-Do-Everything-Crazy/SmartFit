import {getSize, width} from '@utils/responsive';
import {Platform} from 'react-native';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
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
  choose: {
    paddingVertical: getSize.s(3),
    width: getSize.m(80),
    borderRadius: getSize.m(5),
  },
  choosePT: {
    justifyContent: 'center',
    textAlign: 'center',
    height: getSize.m(20),
    color: colors.white,
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
    backgroundColor: colors.blue,
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
  link: {
    color: colors.link,
    textDecorationLine: 'underline',
  },
  sendControlContainerOuter: {
    flex: 1,
    backgroundColor: colors.border,
  },
}));
