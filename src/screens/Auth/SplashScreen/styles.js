import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';
import {theme} from '@theme';

export default StyleSheet.create({
  logo: {
    width: getSize.m(128),
    height: getSize.m(128),
  },
  groupText: {
    flexDirection: 'row',
    paddingTop: getSize.m(30),
  },
  text: {
    fontFamily: 'AlfaSlabOne',
    fontWeight: 'bold',
    fontSize: getSize.m(40),
    color: theme.colors.white,
  },
});
