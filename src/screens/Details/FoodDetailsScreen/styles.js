import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  btn: {
    fontSize: getSize.m(18),
    fontWeight: 'bold',
    color: colors.white,
  },
  link: {
    color: colors.link,
    textDecorationLine: 'underline',
  },
  sendControlContainerOuter: {
    flex: 1,
    backgroundColor: colors.border,
  },
}));
