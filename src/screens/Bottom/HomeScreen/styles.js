import {makeStyles} from '@theme';
import {getSize} from '@utils/responsive';

export const useStyles = makeStyles()(({colors}) => ({
  container: {
    borderTopLeftRadius: getSize.m(16),
    borderTopRightRadius: getSize.m(16),
  },
  image: {
    width: '100%',
    height: getSize.s(160),
    borderRadius: getSize.s(8),
  },
  pagination: {
    backgroundColor: colors.lightGray,
    width: getSize.s(10),
    height: getSize.s(10),
    borderRadius: getSize.s(5),
    marginHorizontal: getSize.s(8),
  },
}));
