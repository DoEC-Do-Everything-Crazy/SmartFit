import {StyleSheet} from 'react-native';
import {getSize, width} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  icon: {
    tintColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: getSize.s(20),
    height: getSize.s(20),
  },
  title: {
    marginLeft: 10,
    marginTop: 180,
    position: 'absolute',
    fontSize: getSize.m(17),
    fontWeight: 'bold',
    color: theme.colors.white,
  },
});
