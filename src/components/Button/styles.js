import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: getSize.v(60),
    paddingHorizontal: getSize.m(20),
    marginVertical: getSize.m(20),
    borderRadius: getSize.m(5),
  },
  leftIcon: {
    width: getSize.s(18),
    height: getSize.s(18),
  },
});
