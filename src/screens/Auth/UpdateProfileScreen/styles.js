import {width, getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';
import {theme} from '@theme';

export default StyleSheet.create({
  group: {
    justifyContent: 'space-between',
  },
  input: {
    height: 60,
  },
  holderInput: {
    marginTop: getSize.m(20),
    fontSize: 100,
  },
  button: {
    height: 600,
  },
  calendar: {
    flex: 1,
  },
  gender: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '3%',
    backgroundColor: theme.colors.white,
    borderRadius: 5,
  },
  img: {
    height: getSize.m(20),
    width: getSize.m(20),
  },
  picker: {
    width: width - 20,
    backgroundColor: 'yellow',
    height: 60,
  },
  text: {
    color: theme.colors.red,
    fontSize: 12,
    position: 'relative',
    bottom: '2%',
    left: '4%',
  },
});
