import {getSize} from '@utils/responsive';
import {Dimensions} from 'react-native';
import {makeStyles} from '@theme';
import {height} from 'utils/responsive';

export const useStyles = makeStyles()(({}) => ({
  camera: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    height: height,
    width: Dimensions.get('screen').width,
    paddingBottom: getSize.s(20),
  },
  button: {
    position: 'absolute',
    bottom: 80,
    zIndex: 100,
  },
  buttonLeft: {
    position: 'absolute',
    bottom: 80,
    right: 5,
    zIndex: 100,
  },
  buttonRight: {
    position: 'absolute',
    bottom: 80,
    left: 5,
    zIndex: 100,
  },
}));
