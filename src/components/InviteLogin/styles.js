import {makeStyles} from '@theme';
import {getSize} from '@utils/responsive';

export const useStyles = makeStyles()(({colors}) => ({
  renderRoot: {
    flex: 1,
    marginTop: getSize.s(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderTitle: {
    marginTop: getSize.s(40),
    fontSize: getSize.s(24),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  renderText: {
    marginTop: getSize.s(10),
    fontSize: getSize.s(16),
    width: getSize.s(350),
    textAlign: 'center',
  },
}));
