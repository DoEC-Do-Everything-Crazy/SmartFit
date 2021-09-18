import {getSize} from '@utils/responsive';
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  camera: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    paddingBottom: getSize.s(20),
  },
});
