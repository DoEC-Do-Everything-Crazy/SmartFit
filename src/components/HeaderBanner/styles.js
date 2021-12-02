import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

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
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    shadowOpacity: 0.5,
    elevation: 4,
    width: getSize.s(60),
    height: getSize.s(60),
    borderRadius: getSize.s(50),
    position: 'absolute',
    bottom: -18,
    right: -18,
  },
  groupButton: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    shadowOpacity: 0.4,
    elevation: 4,
    width: getSize.s(60),
    height: getSize.s(60),
    borderRadius: getSize.s(50),
    position: 'absolute',
    bottom: 32,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
}));
