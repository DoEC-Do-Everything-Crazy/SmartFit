import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  button: {
    backgroundColor: colors.blue,
    height: 48,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 8,
  },
}));
