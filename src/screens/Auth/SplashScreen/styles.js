import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  logo: {
    width: getSize.m(128),
    height: getSize.m(128),
  },
  groupText: {
    flexDirection: 'row',
    paddingTop: getSize.m(30),
  },
  text: {
    fontFamily: 'AlfaSlabOne',
    fontWeight: 'bold',
    fontSize: getSize.m(40),
    color: colors.white,
  },
}));
