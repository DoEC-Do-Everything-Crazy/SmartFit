import {makeStyles} from '@theme';
import {getSize, width} from '@utils/responsive';
export const useStyles = makeStyles()(({}) => ({
  item: {
    justifyContent: 'center',
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: getSize.s(8),
    marginHorizontal: getSize.s(20),
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
}));
