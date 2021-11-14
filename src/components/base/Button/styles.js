import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({}) => ({
  container: {
    marginHorizontal: getSize.m(16),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: getSize.v(60),
    paddingHorizontal: getSize.m(20),
    marginBottom: getSize.m(20),
    borderRadius: getSize.m(8),
  },
  leftIcon: {
    width: getSize.s(18),
    height: getSize.s(18),
  },
}));
