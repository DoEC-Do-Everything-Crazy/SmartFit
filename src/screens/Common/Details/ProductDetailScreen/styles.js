import {getSize, width} from '@utils/responsive';
import {Platform} from 'react-native';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  image: {
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    zIndex: 100,
    position: 'absolute',
    top: 0,
  },
  bottom: {
    width: '100%',
    zIndex: 100,
    position: 'absolute',
    bottom: 0,
  },
  item: {
    width: getSize.m(35),
    justifyContent: 'center',
    marginVertical: getSize.m(10),
    paddingHorizontal: getSize.m(5),
    borderRadius: getSize.m(8),
  },
  text: {
    fontSize: getSize.m(18),
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    height: getSize.m(35),
    width: getSize.m(35),
  },
  button: {
    backgroundColor: colors.blue,
    height: getSize.s(48),
    marginHorizontal: getSize.s(16),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: getSize.s(20),
    marginTop: getSize.s(10),
    borderRadius: getSize.s(8),
  },
  root: {
    backgroundColor: 'transparent',
  },
}));
