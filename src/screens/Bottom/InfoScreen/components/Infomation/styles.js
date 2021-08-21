import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';

export default StyleSheet.create({
  container: {
    borderTopLeftRadius: getSize.m(16),
    borderTopRightRadius: getSize.m(16),
  },

  button: {
    borderWidth: 1,
    height: 55,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    borderRadius: 8,
    borderColor: 'red',
  },
});
