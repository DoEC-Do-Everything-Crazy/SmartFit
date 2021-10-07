import {getSize, width} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({}) => ({
  container: {
    paddingHorizontal: getSize.m(16),
    marginTop: getSize.m(16),
  },
  image: {
    height: getSize.s(130),
    width: width - 32,
    borderRadius: getSize.s(10),
  },
  title: {
    position: 'absolute',
    bottom: getSize.s(10),
    marginLeft: getSize.s(32),
  },
}));
