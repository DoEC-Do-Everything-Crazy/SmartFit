import {height, width} from 'utils/responsive';

import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  root: {
    justifyContent: 'center',
    paddingTop: getSize.m(100),
    flex: 1,
  },
  button: {
    height: 60,
    backgroundColor: colors.blue,
    borderRadius: 8,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendControlContainerOuter: {
    flex: 1,
  },
  inputStyle: {
    height: getSize.m(48),
    paddingLeft: getSize.m(16),
    borderWidth: 0,
  },
  processing: {
    width: width,
    height: height,
    position: 'absolute',
    zIndex: 100,
  },
  googleSigninButton: {
    width: 192,
    height: 48,
  },
}));
