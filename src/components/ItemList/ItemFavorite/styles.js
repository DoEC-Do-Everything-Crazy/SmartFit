import {getSize, width} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  image: {
    position: 'absolute',
    width: (width - 96) / 2,
    height: (width - 96) / 2,
    borderRadius: 200,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: getSize.s(8),
    marginTop: getSize.s(60),
    paddingTop: getSize.s(80),
    paddingBottom: getSize.s(32),
    paddingHorizontal: getSize.s(16),
    width: (width - 48) / 2,
    backgroundColor: colors.border,
  },
  iconHeart: {
    width: getSize.s(16),
    height: getSize.s(16),
    position: 'absolute',
    bottom: getSize.s(16),
    right: getSize.s(16),
  },
}));
