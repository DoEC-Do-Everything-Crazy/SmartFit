import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({}) => ({
  icon: {
    height: getSize.s(200),
    width: getSize.s(200),
  },
  btn: config => ({
    backgroundColor: config.general_active_color,
  }),
}));
