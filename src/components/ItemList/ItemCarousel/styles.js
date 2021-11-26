import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  image: {
    width: getSize.s(100),
    height: getSize.s(140),
    borderRadius: getSize.s(8),
  },

  heartContainer: {
    position: 'absolute',
    top: getSize.s(5),
    left: getSize.s(70),
    zIndex: 1,
  },
}));
