import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  press: {
    height: 48,
    marginVertical: 15,
    marginHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  sendControlContainerOuter: {
    flex: 1,
  },
}));
