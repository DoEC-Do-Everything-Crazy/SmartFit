import {getSize, width} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  image: {
    height: getSize.s(200),
    width: width / 2.5,
    borderRadius: getSize.s(10),
  },
  title: {
    width: '100%',
    backgroundColor: `${colors.black}90`,
    position: 'absolute',
    bottom: 0,
    paddingVertical: getSize.m(8),
    paddingHorizontal: getSize.m(16),
    borderBottomLeftRadius: getSize.m(10),
    borderBottomRightRadius: getSize.m(10),
  },
  iconHeart: {
    width: getSize.s(16),
    height: getSize.s(16),
    position: 'absolute',
    top: getSize.s(8),
    right: getSize.s(16),
  },
  view: {
    width: getSize.s(16),
    height: getSize.s(18),
    position: 'absolute',
    top: getSize.s(1),
    right: getSize.s(10),
  },
  iconViewer: {
    marginRight: getSize.s(3),
    marginTop: getSize.s(1),
    width: getSize.s(25),
    height: getSize.s(20),
  },
}));
