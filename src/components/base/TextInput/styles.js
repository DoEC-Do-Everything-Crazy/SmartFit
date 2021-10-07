import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors, fonts}) => ({
  resetStyles: {
    flex: 1,
    padding: 0,
    margin: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  defaultStyles: {
    fontFamily: fonts.fontFamily.default,
    minHeight: getSize.m(38),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.blue,
    backgroundColor: colors.white,
    borderRadius: getSize.s(5),
    height: getSize.s(60),
  },
  leftIcon: {
    position: 'absolute',
    left: getSize.m(12),
    height: getSize.s(20),
    width: getSize.s(20),
    marginRight: 100,
  },
  rightIcon: {
    position: 'absolute',
    right: getSize.m(12),
  },
}));
