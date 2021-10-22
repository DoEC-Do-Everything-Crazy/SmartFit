import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  list: {
    marginTop: getSize.s(10),
  },
  picker: {
    backgroundColor: colors.border,
  },
}));
