import {width} from '@utils/responsive';
import {getSize} from 'utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({}) => ({
  image: {
    width: width / 2 - 80,
    height: width / 2 - 80,
    borderRadius: getSize.m(5),
    resizeMode: 'cover',
    alignContent: 'center',
    alignSelf: 'center',
  },

  icon: {
    alignSelf: 'flex-end',
  },
  ratting: {
    flexDirection: 'row',
    marginTop: getSize.m(5),
  },

  press: {flex: 1},
}));
