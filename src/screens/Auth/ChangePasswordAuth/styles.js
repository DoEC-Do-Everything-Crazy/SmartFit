import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  text: {
    color: colors.red,
    fontSize: 12,
    position: 'relative',
    bottom: '2%',
    left: '4%',
  },
  sendControlContainerOuter: {
    flex: 1,
    backgroundColor: colors.backgroundSetting,
  },
  root: {
    flex: 1,
    backgroundColor: colors.border,
  },
}));
