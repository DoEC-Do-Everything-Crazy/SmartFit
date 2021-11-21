import {makeStyles} from '@theme';
import {getSize} from '@utils/responsive';
export const useStyles = makeStyles()(({colors}) => ({
  layout: {
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 4,
    width: getSize.s(60),
    height: getSize.s(60),
    borderRadius: getSize.s(50),
    position: 'absolute',
    bottom: -18,
    right: -18,
  },
  groupButton: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 4,
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
  sendControlContainerOuter: {
    flex: 1,
  },
}));
