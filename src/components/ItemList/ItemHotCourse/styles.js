import {getSize, width} from '@utils/responsive';

import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
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
    flexDirection: 'row',
    width: '100%',
    backgroundColor: `${colors.black}60`,
    position: 'absolute',
    bottom: 0,
    paddingVertical: getSize.s(8),
    marginLeft: getSize.s(16),
    borderBottomRightRadius: getSize.s(10),
    borderBottomLeftRadius: getSize.s(10),
  },
  view: {
    width: getSize.s(16),
    height: getSize.s(16),
    position: 'absolute',
    top: getSize.s(8),
    right: getSize.s(32),
  },
  iconViewer: {
    width: getSize.s(28),
    height: getSize.s(25),
  },
}));
