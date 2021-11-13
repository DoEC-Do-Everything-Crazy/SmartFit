import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  title: {
    fontSize: getSize.m(18),
    fontWeight: 'bold',
    color: colors.iconInf,
  },
  image: {
    top: 15,
    zIndex: 1,
    resizeMode: 'cover',
    position: 'absolute',
  },
  item: {
    marginVertical: getSize.m(5),
    paddingHorizontal: getSize.m(16),
  },
  imagePromotion: {
    width: 90,
    height: 90,
  },
  valuePromotion: {
    fontWeight: 'bold',
    color: colors.iconInf,
    fontSize: 25,
    textAlign: 'center',
  },
  expiryDate: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },
  code: {
    position: 'absolute',
    right: 16,
    top: 5,
  },
}));
