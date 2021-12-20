import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    justifyContent: 'space-between',
    marginTop: getSize.m(16),
    paddingBottom: getSize.m(16),
    borderColor: colors.smoke,
    borderBottomWidth: 1,
  },
  imageSearch: {
    width: getSize.s(36),
    height: getSize.s(36),
  },
}));
