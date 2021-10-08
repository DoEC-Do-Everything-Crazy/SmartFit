import {makeStyles} from '@theme';
import {getSize} from '@utils/responsive';

export const useStyles = makeStyles()(({}) => ({
  item: {
    justifyContent: 'center',
    marginVertical: getSize.m(10),
    paddingVertical: getSize.m(5),
    paddingHorizontal: getSize.m(10),
    borderRadius: getSize.m(8),
    marginHorizontal: getSize.m(10),
  },

  text: {
    fontSize: getSize.m(18),
    color: 'white',
    fontWeight: 'bold',
  },
}));
