import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({}) => ({
  image: {
    position: 'absolute',
    bottom: -32,
    left: -16,
    alignSelf: 'center',
    width: getSize.s(100),
    height: getSize.s(100),
  },
  iconPlus: {
    width: getSize.s(14),
    height: getSize.s(14),
  },
}));
