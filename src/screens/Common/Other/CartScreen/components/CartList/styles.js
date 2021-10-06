import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  swipeOut: {
    backgroundColor: 'transparent',
  },
  component_icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
}));
