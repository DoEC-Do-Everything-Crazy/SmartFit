import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  containerInputStyle: {
    width: '100%',
    height: getSize.m(48),
    marginBottom: getSize.m(10),
  },
  inputStyle: {
    height: getSize.m(48),
    paddingLeft: getSize.m(16),
    borderWidth: 0,
  },
  iconSeach: {
    height: getSize.s(24),
    width: getSize.s(24),
    marginRight: getSize.m(10),
    tintColor: colors.yellowFood,
  },
}));
