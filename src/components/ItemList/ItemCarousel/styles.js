import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  image: {
    width: getSize.s(120),
    height: getSize.s(160),
    borderRadius: getSize.s(8),
  },

  heartContainer: {
    position: 'absolute',
    top: getSize.s(5),
    left: getSize.s(90),
    zIndex: 1,
  },
}));
