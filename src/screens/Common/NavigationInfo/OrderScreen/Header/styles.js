import {makeStyles} from '@theme';
import {getSize} from '@utils/responsive';

export const useStyles = makeStyles()(({colors}) => ({
  root: {
    paddingTop: getSize.s(50),
    width: '100%',
    height: getSize.s(90),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.border,
    backgroundColor: `${colors.headerDetail}60`,
    zIndex: 100,
  },
  arrowLeftBack: {
    position: 'absolute',
    left: getSize.s(20),
    top: getSize.s(55),
    width: 18.05,
    height: 14.34,
    zIndex: 100,
  },
  arrowRight: {
    position: 'absolute',
    right: getSize.s(25),
    top: getSize.s(55),
    width: 18.05,
    height: 14.34,
  },
}));
