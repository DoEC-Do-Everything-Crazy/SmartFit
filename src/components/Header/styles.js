import {makeStyles} from '@theme';
import {getSize} from '@utils/responsive';

export const useStyles = makeStyles()(({colors}) => ({
  root: {
    paddingTop: getSize.s(5),
    width: '100%',
    height: getSize.s(60),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.border,
    backgroundColor: colors.border,
    zIndex: 100,
  },
  arrowLeftBack: {
    position: 'absolute',
    left: getSize.s(20),
    top: getSize.s(20),
    width: 50,
    height: 50,
    zIndex: 100,
  },
  arrowRight: {
    position: 'absolute',
    right: getSize.s(25),
    top: getSize.s(20),
    width: 18.05,
    height: 14.34,
    zIndex: 100,
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
    zIndex: 100,
  },
  text: {
    alignItems: 'center',
    fontSize: getSize.m(20),
    fontWeight: 'bold',
  },
  sendControlContainerOuter: {
    backgroundColor: 'black',
  },
}));
