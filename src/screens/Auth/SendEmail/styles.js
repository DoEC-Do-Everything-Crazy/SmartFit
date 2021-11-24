import {width} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  image: {
    width: width / 2,
    height: 200,
  },

  button: {
    width: 100,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: colors.blue,
    alignSelf: 'center',
  },
}));
