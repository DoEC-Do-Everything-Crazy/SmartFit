import {makeStyles} from '@theme';
import {getSize} from '@utils/responsive';

export const useStyles = makeStyles()(({colors}) => ({
  root: {
    paddingTop: getSize.s(30),
    width: '100%',
    height: getSize.s(70),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.border,
    backgroundColor: colors.header,
    zIndex: 100,
  },
  arrowLeftBack: {
    position: 'absolute',
    left: getSize.s(20),
    top: getSize.s(35),
    width: 18.05,
    height: 14.34,
  },
  arrowRight: {
    position: 'absolute',
    right: getSize.s(25),
    top: getSize.s(35),
    width: 18.05,
    height: 14.34,
  },
  search: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: getSize.m(10),
    height: getSize.s(40),
    justifyContent: 'space-between',
    paddingHorizontal: getSize.m(16),
    backgroundColor: colors.white,
  },
  text: {
    alignItems: 'center',
    fontSize: getSize.m(20),
    fontWeight: 'bold',
  },
}));
