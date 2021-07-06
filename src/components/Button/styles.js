import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    marginLeft: 16,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: getSize.m(20),
    borderRadius: getSize.m(5),
  },
});
