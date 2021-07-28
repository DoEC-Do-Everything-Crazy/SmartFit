import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  item: {
    //backgroundColor: '#045694',
    justifyContent: 'center',
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginHorizontal: 5,
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
