import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({}) => ({
  image: {
    zIndex: 1,
    width: getSize.s(85),
    height: getSize.s(125),
    position: 'absolute',
    borderRadius: getSize.m(15),
    justifyContent: 'center',
  },
  imageInfo: {
    tintColor: '#444C5C',
    width: 15,
    height: 15,
  },
}));
