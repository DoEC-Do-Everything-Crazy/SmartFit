import {makeStyles} from '@theme';
import {getSize} from '@utils/responsive';

export const useStyles = makeStyles()(({}) => ({
  press: {
    borderWidth: 1,
    justifyContent: 'center',
    marginVertical: getSize.m(10),
    paddingVertical: getSize.m(5),
    paddingHorizontal: getSize.m(10),
    borderRadius: getSize.m(8),
    marginHorizontal: getSize.m(10),
    borderColor: '#EBF0FF',
  },
  text: {
    fontSize: getSize.m(18),
    color: 'white',
    fontWeight: 'bold',
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
}));
