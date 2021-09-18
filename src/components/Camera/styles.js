// import {getSize} from '@utils/responsive';
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  camera: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
  },
});
