import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  root: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  modal: {
    backgroundColor: colors.backgroundSetting,
  },
}));
