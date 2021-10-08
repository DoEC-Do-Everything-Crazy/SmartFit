import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  floatComponent: {
    backgroundColor: colors.backgroundSetting,
  },
  textInput: {
    paddingHorizontal: getSize.m(16),
  },
  text: {
    color: colors.red,
    fontSize: 14,
    position: 'relative',
    bottom: '-8%',
    left: '4%',
  },
  changePass: {
    borderTopLeftRadius: getSize.m(5),
    borderTopRightRadius: getSize.m(5),
  },
}));
