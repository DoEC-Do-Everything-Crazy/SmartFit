import {makeStyles} from '@theme';
import {getSize} from '@utils/responsive';

export const useStyles = makeStyles()(({colors}) => ({
  container: {
    borderTopLeftRadius: getSize.m(16),
    borderTopRightRadius: getSize.m(16),
  },
  image: {
    width: '100%',
    height: getSize.s(130),
    borderRadius: getSize.s(8),
  },
  pagination: {
    backgroundColor: colors.lightGray,
    width: getSize.s(10),
    height: getSize.s(10),
    borderRadius: getSize.s(5),
    marginHorizontal: getSize.s(8),
    marginTop: getSize.s(-8),
  },
  layout: {
    width: getSize.s(60),
    height: getSize.s(60),
    borderRadius: getSize.s(50),
    position: 'absolute',
    bottom: -18,
    right: -18,
  },
  groupButton: {
    width: getSize.s(60),
    height: getSize.s(60),
    borderRadius: getSize.s(50),
    position: 'absolute',
    bottom: 15,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
}));
