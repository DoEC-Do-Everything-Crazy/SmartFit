import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({}) => ({
  press: {
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 8,
    height: 48,
    marginVertical: 8,
    borderRadius: 8,
    borderColor: '#EBF0FF',
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
}));
