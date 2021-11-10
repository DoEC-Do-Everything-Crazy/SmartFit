import {makeStyles, theme} from '@theme';
import {getSize} from '@utils/responsive';

export const useStyles = makeStyles()(({}) => ({
  container: {
    backgroundColor: '#edefee',
    borderTopLeftRadius: getSize.m(16),
    borderTopRightRadius: getSize.m(16),
  },
}));
