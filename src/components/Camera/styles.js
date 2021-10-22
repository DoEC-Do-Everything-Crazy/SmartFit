import {getSize} from '@utils/responsive';
import {Dimensions} from 'react-native';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({}) => ({
  camera: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    paddingBottom: getSize.s(20),
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
  },
}));
