import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    borderRadius: getSize.m(8),
    width: getSize.s(100),
    height: getSize.s(100),
    marginRight: getSize.s(20),
  },
  textInput: {
    height: getSize.s(150),
    paddingHorizontal: getSize.m(16),
  },
  item: {
    justifyContent: 'center',
    marginVertical: getSize.m(10),
    paddingVertical: getSize.m(5),
    paddingHorizontal: getSize.m(12),
    borderRadius: getSize.m(8),
    borderWidth: getSize.m(1),
  },
  itemCancel: {
    justifyContent: 'center',
    marginVertical: getSize.m(10),
    paddingVertical: getSize.m(5),
    paddingHorizontal: getSize.m(12),
    borderRadius: getSize.m(8),
    backgroundColor: theme.colors.red,
  },
  itemConfirm: {
    justifyContent: 'center',
    marginVertical: getSize.m(10),
    paddingVertical: getSize.m(5),
    paddingHorizontal: getSize.m(12),
    borderRadius: getSize.m(8),
    backgroundColor: theme.colors.green,
  },
  bottomLayout: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: theme.colors.blue,
    height: getSize.m(48),
    marginHorizontal: getSize.m(16),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: getSize.m(20),

    borderRadius: getSize.m(8),
  },
});
