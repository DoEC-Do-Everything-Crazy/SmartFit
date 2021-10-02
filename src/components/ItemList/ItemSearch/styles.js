import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 5,
    justifyContent: 'space-between',
    marginTop: getSize.m(20),
    paddingBottom: getSize.m(20),
    borderColor: theme.colors.smoke,
    borderBottomWidth: 1,
  },
  imageSearch: {
    width: getSize.s(36),
    height: getSize.s(36),
  },
});
