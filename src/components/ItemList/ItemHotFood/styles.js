import {getSize, width} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  image: {
    height: getSize.s(200),
    width: width / 2.1,
    borderRadius: getSize.s(8),
  },
  space: {
    right: 0,
    width: '50%',
    height: '40%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 10,
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    left: 15,
  },
  shadow: {
    position: 'absolute',
    bottom: -11,
    left: -2,
  },
  layout: {
    position: 'absolute',
    bottom: -13,
    left: -2,
  },
  title: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingVertical: getSize.m(8),
    paddingLeft: getSize.m(60),
    borderBottomLeftRadius: getSize.m(10),
    borderBottomRightRadius: getSize.m(10),
  },
}));
