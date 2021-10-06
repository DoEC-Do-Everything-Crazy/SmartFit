import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({}) => ({
  icon: {
    height: getSize.s(300),
    width: getSize.s(300),
    marginBottom: getSize.m(20),
  },
  lottie: {
    height: getSize.s(300),
    width: getSize.s(300),
    marginBottom: getSize.m(20),
  },
  button: {
    marginTop: getSize.m(15),
    paddingVertical: getSize.m(10),
    paddingHorizontal: getSize.m(15),
    borderRadius: getSize.m(5),
  },
}));
