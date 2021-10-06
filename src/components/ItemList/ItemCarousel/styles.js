import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  image: {
    width: '100%',
    height: getSize.s(160),
    borderRadius: getSize.s(8),
  },

  heartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: getSize.s(140),
    right: getSize.s(5),
    backgroundColor: colors.white,
    width: getSize.s(40),
    height: getSize.s(40),
    borderRadius: getSize.s(25),
  },
}));
