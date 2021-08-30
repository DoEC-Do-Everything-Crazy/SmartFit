import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';
import {theme} from '@theme';

export default StyleSheet.create({
  image: {
    tintColor: 'grey',
  },
  search: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.colors.black,
    marginHorizontal: 4,
  },
  touch: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 16,
  },

  icons: {
    tintColor: theme.colors.white,
  },
});
