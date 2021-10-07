import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  title: {
    fontSize: getSize.m(18),
    fontWeight: 'bold',
    color: colors.blue,
  },
  image: {
    top: 15,
    zIndex: 1,
    resizeMode: 'cover',
    position: 'absolute',
  },
  item: {
    marginVertical: getSize.m(8),
    paddingHorizontal: getSize.m(16),
  },
}));
