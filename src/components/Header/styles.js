import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';

export default StyleSheet.create({
  iconBack: {
    height: getSize.s(15),
    width: getSize.s(15),
  },
  btnBack: {
    marginRight: getSize.m(15),
    paddingVertical: getSize.m(3),
    paddingRight: getSize.m(3),
  },
  iconAction: config => ({
    width: getSize.s(18),
    height: getSize.s(18),
    tintColor: config.general_active_color,
  }),
});
