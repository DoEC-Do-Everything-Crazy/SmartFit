import {StyleSheet} from 'react-native';
import {getSize, width} from '@utils/responsive';
import {theme} from '@theme';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
  image: {
    borderTopLeftRadius: getSize.m(5),
    borderBottomLeftRadius: getSize.m(5),
    width: getSize.s(100),
    height: getSize.s(120),
  },
  item: {
    justifyContent: 'center',
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  itemCancel: {
    justifyContent: 'center',
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: theme.colors.red,
  },
  itemConfirm: {
    justifyContent: 'center',
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: theme.colors.green,
  },
});
