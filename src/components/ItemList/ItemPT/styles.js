import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({}) => ({
  image: {
    width: getSize.s(80),
    height: getSize.s(80),
    borderRadius: getSize.m(5),
  },
  icon: {
    width: getSize.s(15),
    height: getSize.s(15),
  },
  iconNext: {
    width: getSize.s(15),
    height: getSize.s(30),
  },
}));
