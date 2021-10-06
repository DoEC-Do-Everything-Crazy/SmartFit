import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  container: {flex: 1, alignItems: 'center'},
  button: {
    height: 60,
    backgroundColor: colors.blue,
    borderRadius: 8,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
