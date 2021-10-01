import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';
import {theme} from './../../theme/index';

export default StyleSheet.create({
  iconBack: {
    height: getSize.s(18),
    width: getSize.s(18),
  },
  iconHeader: {
    height: getSize.s(20),
    width: getSize.s(20),
  },
  iconCart: {
    height: getSize.s(25),
    width: getSize.s(25),
  },
  search: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: getSize.m(10),
    height: getSize.s(40),
    justifyContent: 'space-between',
    paddingHorizontal: getSize.m(16),
    backgroundColor: theme.colors.white,
  },
});
