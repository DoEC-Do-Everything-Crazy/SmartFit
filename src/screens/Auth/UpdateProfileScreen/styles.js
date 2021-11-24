import {getSize, width} from '@utils/responsive';

import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  group: {
    paddingHorizontal: getSize.s(16),
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
  },

  calendar: {
    flex: 1,
  },
  gender: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: getSize.s(-2),
    backgroundColor: colors.inputText,
    borderRadius: getSize.s(8),
    height: getSize.s(60),
    marginBottom: getSize.s(30),
    borderWidth: 0,
  },
  pickerBox: {
    width: width - 30,
    marginLeft: getSize.s(-2),
    borderColor: colors.inputText,
  },
  img: {
    height: getSize.m(20),
    width: getSize.m(20),
  },
  sendControlContainerOuter: {
    flex: 1,
  },
  text: {
    color: colors.red,
    fontSize: 12,
    position: 'relative',
    bottom: '2%',
    left: '4%',
  },
  button: {
    backgroundColor: colors.blue,
    height: getSize.s(48),
    marginHorizontal: getSize.s(16),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: getSize.s(20),
    marginTop: getSize.s(10),
    borderRadius: getSize.s(8),
  },
}));
