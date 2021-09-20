import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';
import {theme} from '@theme';
export default StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
  },
  renderRoot: {
    flex: 1,
    marginTop: getSize.s(100),
    alignItems: 'center',
    justifyContent: 'center',
  },

  renderTitle: {
    marginTop: getSize.s(50),
    fontWeight: 'bold',
    textAlign: 'center',
  },

  renderText: {
    textAlign: 'center',
  },

  pagination: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },

  bodyLayout: {
    flex: 4.5,
  },
  bottomLayout: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: theme.colors.blue,
    height: 48,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 8,
  },
  image: {
    width: getSize.s(200),
    height: getSize.s(200),
  },
});
