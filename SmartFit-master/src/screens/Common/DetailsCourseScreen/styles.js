import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  icon: {
    height: getSize.s(200),
    width: getSize.s(200),
  },
  btn: config => ({
    backgroundColor: config.general_active_color,
  }),
});
