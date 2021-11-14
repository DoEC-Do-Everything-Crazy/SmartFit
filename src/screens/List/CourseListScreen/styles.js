import {makeStyles} from '@theme';
import {getSize} from '@utils/responsive';

export const useStyles = makeStyles()(({colors}) => ({
  layout: {
    width: getSize.s(60),
    height: getSize.s(60),
    borderRadius: getSize.s(50),
    position: 'absolute',
    bottom: -18,
    right: -18,
  },
  groupButton: {
    width: getSize.s(60),
    height: getSize.s(60),
    borderRadius: getSize.s(50),
    position: 'absolute',
    bottom: 32,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
}));
