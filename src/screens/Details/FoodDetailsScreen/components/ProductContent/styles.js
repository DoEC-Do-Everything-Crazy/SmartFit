import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors, font}) => ({
  linearGradient: {
    flex: 1,
    borderBottomLeftRadius: getSize.s(16),
    borderTopLeftRadius: getSize.s(16),
  },
  iconHeart: {
    width: getSize.s(24),
    height: getSize.s(24),
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: getSize.s(16),
    borderBottomLeftRadius: getSize.s(16),
  },
  header: {
    height: getSize.s(50),
    justifyContent: 'center',
    borderTopLeftRadius: getSize.s(16),
    backgroundColor: `${colors.headerDetail}99`,
    width: '100%',
    zIndex: 100,
    position: 'absolute',
    top: 0,
  },
  bottom: {
    height: getSize.s(30),
    justifyContent: 'center',
    borderBottomLeftRadius: getSize.s(16),
    backgroundColor: `${colors.headerDetail}99`,
    width: '100%',
    zIndex: 100,
    position: 'absolute',
    bottom: 0,
  },
}));
