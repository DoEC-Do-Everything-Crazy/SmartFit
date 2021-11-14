import {makeStyles} from '@theme';
import {getSize} from '@utils/responsive';

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
  },
}));
