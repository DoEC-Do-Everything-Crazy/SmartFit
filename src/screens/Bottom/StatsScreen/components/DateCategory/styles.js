import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({}) => ({
  item: {
    justifyContent: 'center',
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
}));
