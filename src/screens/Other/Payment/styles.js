import {makeStyles, theme} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  address: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: colors.border,
  },
  sendControlContainerOuter: {
    flex: 1,
    backgroundColor: colors.backgroundSetting,
  },
}));
