import {width} from '@utils/responsive';
import {getSize} from 'utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  image: {
    width: width / 2 - 20,
    height: width / 2 - 60,
    borderRadius: getSize.m(5),
    resizeMode: 'cover',
    alignContent: 'center',
    alignSelf: 'center',
  },

  icon: {
    position: 'absolute',
    top: getSize.s(115),
    right: getSize.s(5),
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: getSize.s(40),
    height: getSize.s(40),
    borderRadius: getSize.s(25),
    backgroundColor: colors.border,
  },
  ratting: {
    flexDirection: 'row',
    marginTop: getSize.m(5),
  },

  press: {flex: 1},
}));
