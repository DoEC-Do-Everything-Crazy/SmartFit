import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  icon: {
    tintColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: getSize.s(20),
    height: getSize.s(20),
  },
  title: {
    marginLeft: 10,
    marginTop: 180,
    position: 'absolute',
    fontSize: getSize.m(17),
    fontWeight: 'bold',
    color: colors.white,
  },
}));
