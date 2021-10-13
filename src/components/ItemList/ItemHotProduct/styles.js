import {getSize, width} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  image: {
    height: getSize.s(200),
    width: width / 2.5,
    borderRadius: getSize.s(10),
  },
  title: {
    width: '100%',
    backgroundColor: `${colors.black}40`,
    position: 'absolute',
    bottom: 0,
    paddingVertical: getSize.m(8),
    paddingHorizontal: getSize.m(16),
    borderBottomLeftRadius: getSize.m(10),
    borderBottomRightRadius: getSize.m(10),
  },
}));
