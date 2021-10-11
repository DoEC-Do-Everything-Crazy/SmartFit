import {getSize, width} from '@utils/responsive';

import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  group: {
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
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
    backgroundColor: colors.white,
    borderRadius: getSize.s(8),
    width: width - 30,
    height: getSize.s(60),
    marginBottom: getSize.s(30),
    borderWidth: 0,
  },
  img: {
    height: getSize.m(20),
    width: getSize.m(20),
  },

  text: {
    color: colors.red,
    fontSize: 12,
    position: 'relative',
    bottom: '2%',
    left: '4%',
  },
}));
