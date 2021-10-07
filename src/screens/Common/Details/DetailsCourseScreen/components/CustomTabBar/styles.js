import {getSize, width} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors, fonts}) => ({
  btn: isFocused => ({
    width: (width - 32) / 2,
    height: getSize.s(48),
    borderRadius: getSize.m(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isFocused ? colors.blue : colors.background,
  }),
  txt: isFocused => ({
    color: isFocused ? colors.white : colors.blue,
    fontSize: getSize.s(14),
    fontWeight: fonts.fontWeight.bold,
  }),
  container: {
    flexDirection: 'row',
    borderRadius: getSize.m(6),
    borderWidth: 1,
    borderColor: colors.blue,
  },
}));
