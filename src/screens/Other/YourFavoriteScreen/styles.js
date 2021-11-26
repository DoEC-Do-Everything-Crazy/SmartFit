import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  item: {
    width: getSize.m(200),
    height: getSize.m(260),
  },
  imageContainer: {
    backgroundColor: 'white',
    borderRadius: getSize.m(8),
  },
  image: {
    width: getSize.m(200),
    height: getSize.m(260),
  },
  sendControlContainerOuter: {
    flex: 1,
    backgroundColor: colors.border,
  },
}));
