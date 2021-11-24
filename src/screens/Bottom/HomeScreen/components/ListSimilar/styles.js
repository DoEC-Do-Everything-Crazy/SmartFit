import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  container: {
    borderTopLeftRadius: getSize.m(16),
    borderTopRightRadius: getSize.m(16),
  },
  link: {
    color: colors.link,
    textDecorationLine: 'underline',
  },
}));
