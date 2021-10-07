import {width, getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
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
    backgroundColor: colors.white,
    borderRadius: getSize.s(5),
  },
  img: {
    height: getSize.m(20),
    width: getSize.m(20),
  },
  picker: {
    width: width - 20,
    borderRadius: getSize.s(5),
    height: getSize.s(60),
  },
  text: {
    color: colors.red,
    fontSize: 12,
    position: 'relative',
    bottom: '2%',
    left: '4%',
  },
}));
