import {makeStyles} from '@theme';
import {getSize} from '@utils/responsive';

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
    width: getSize.s(200),
    height: getSize.s(200),
  },
}));
