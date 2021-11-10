import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  address: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: colors.white,
  },
}));
