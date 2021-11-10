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
    marginVertical: getSize.m(8),
    paddingHorizontal: getSize.m(16),
  },
  imagePromotion: {
    width: 90,
    height: 90,
  },
  valuePromotion: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 45,
    textAlign: 'center',
  },
  expiryDate: {
    fontWeight: 'bold',
    color: 'white',
  },
}));
