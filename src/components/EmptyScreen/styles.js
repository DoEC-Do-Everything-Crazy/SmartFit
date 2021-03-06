import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  renderRoot: {
    flex: 1,
    marginTop: getSize.s(100),
    alignItems: 'center',
    justifyContent: 'center',
  },

  renderTitle: {
    marginTop: getSize.s(30),
    fontWeight: 'bold',
    textAlign: 'center',
  },

  renderText: {
    marginBottom: getSize.s(10),
    textAlign: 'center',
  },
  image: {
    width: getSize.s(200),
    height: getSize.s(200),
  },
});
