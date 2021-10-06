import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  image: {
    tintColor: 'grey',
  },
  search: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.black,
    marginHorizontal: 4,
  },
  touch: {
    width: 48,
    height: 48,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 16,
  },
  icons: {
    tintColor: colors.white,
  },
}));
