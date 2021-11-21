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
  inputText: {
    borderColor: colors.blue,
  },
  defaultStyles: {
    fontFamily: fonts.fontFamily.default,
    minHeight: getSize.m(38),
  },
  containerInputStyle: {
    backgroundColor: colors.inputText,
    borderRadius: getSize.s(5),
    height: getSize.s(65),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    position: 'absolute',
    left: getSize.m(12),
    top: getSize.m(9),
    height: getSize.s(20),
    width: getSize.s(20),
    marginRight: 100,
  },
  rightIcon: {
    position: 'absolute',
    right: getSize.m(12),
  },
  inputStyle: {
    marginRight: getSize.m(16),
  },
}));
