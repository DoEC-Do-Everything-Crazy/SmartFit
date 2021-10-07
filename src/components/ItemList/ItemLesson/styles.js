import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({}) => ({
  image: {
    borderRadius: getSize.m(5),
    width: getSize.s(64),
    height: getSize.s(64),
  },
}));
