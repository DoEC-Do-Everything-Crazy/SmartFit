import {width} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    width: width / 2 - 80,
    height: width / 2 - 80,
    borderRadius: 8,
    resizeMode: 'cover',
    alignContent: 'center',
    alignSelf: 'center',
  },

  icon: {
    tintColor: 'red',
    alignSelf: 'flex-end',
    width: 15,
    height: 15,
  },

  press: {flex: 1},
});
