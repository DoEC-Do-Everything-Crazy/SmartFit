import {makeStyles} from '@theme';
import {getSize} from '@utils/responsive';

export const useStyles = makeStyles()(({colors}) => ({
  container: {
    borderTopLeftRadius: getSize.m(16),
    borderTopRightRadius: getSize.m(16),
  },
  button: {
    marginHorizontal: 16,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 8,
  },
}));
