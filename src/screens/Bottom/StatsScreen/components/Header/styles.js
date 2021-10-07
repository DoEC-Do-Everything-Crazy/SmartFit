import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({}) => ({
  image: {
    width: getSize.s(40),
    height: getSize.s(40),
    borderRadius: 200 / 2,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  date: {
    fontSize: 12,
  },
}));
