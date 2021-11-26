import {makeStyles} from '@theme';
import {getSize, width} from '@utils/responsive';

export const useStyles = makeStyles()(({colors, fonts}) => ({
  btn: {
    width: (width - 32) / 2,
    height: getSize.s(48),
    borderRadius: getSize.m(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: getSize.s(14),
    fontWeight: fonts.fontWeight.bold,
  },
  container: {
    flexDirection: 'row',
    borderRadius: getSize.m(6),
    borderWidth: 1,
    borderColor: colors.blue,
  },
}));
