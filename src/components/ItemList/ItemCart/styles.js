import {makeStyles} from '@theme';
import {getSize} from '@utils/responsive';

export const useStyles = makeStyles()(({}) => ({
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  item: {
    width: getSize.m(20),
    height: getSize.m(20),
    justifyContent: 'center',
    borderRadius: getSize.m(15),
  },
  text: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
}));
