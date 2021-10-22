import {width} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({}) => ({
  imageHorizontal: {
    borderRadius: 5,
    width: width / 1.095,
    height: 192,
    marginTop: 16,
    overflow: 'hidden',
  },
  imageColumOne: {
    height: 183,
    width: 183,
    marginTop: 16,
    borderRadius: 5,
  },
  imageColumTwo: {
    width: width / 2.5,
    marginTop: 16,
    marginLeft: 16,
    borderRadius: 5,
    overflow: 'hidden',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    bottom: 0,
    margin: 10,
  },
  textBoxing: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    bottom: 10,
    left: 25,
  },
}));
