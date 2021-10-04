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
    alignItems: 'center',
    justifyContent: 'center',
  },

  renderTitle: {
    marginTop: getSize.s(30),
    fontSize: getSize.s(24),
    fontWeight: 'bold',
    textAlign: 'center',
  },

  renderText: {
    marginTop: getSize.s(10),
    fontSize: getSize.s(16),
    width: getSize.s(350),
    textAlign: 'center',
  },

  button: {
    backgroundColor: theme.colors.blue,
    height: getSize.s(48),
    marginHorizontal: getSize.s(16),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: getSize.s(20),
    marginTop: getSize.s(10),
    borderRadius: getSize.s(8),
  },
  textInput: {
    paddingHorizontal: getSize.m(16),
  },
  text: {
    color: 'red',
    fontSize: 12,
    position: 'relative',
    bottom: '2%',
    left: '4%',
    marginTop: 8,
  },
});
