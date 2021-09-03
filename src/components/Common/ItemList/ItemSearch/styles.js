import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 5,
    justifyContent: 'space-between',
    marginTop: getSize.m(10),
  },
  imageSearch: {
    width: getSize.s(36),
    height: getSize.s(36),
  },
});
