import {StyleSheet} from 'react-native';
import {getSize, width, height} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
  container: {
    height: height,
    width: width,
    marginTop: getSize.m(175),
    position: 'absolute',
    paddingHorizontal: getSize.m(16),
    borderTopLeftRadius: getSize.m(32),
    borderTopRightRadius: getSize.m(32),
    backgroundColor: theme.colors.white,
  },
  logo: {
    width: getSize.s(70),
    height: getSize.s(70),
  },
  titleStyle: {
    fontSize: getSize.m(18),
    fontWeight: 'bold',
  },
  containerStyle: {
    borderWidth: 1,
    borderColor: theme.colors.blue,
    backgroundColor: theme.colors.white,
  },
});
