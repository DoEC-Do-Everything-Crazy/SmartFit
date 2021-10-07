import {makeStyles} from '@theme';
import {getSize} from '@utils/responsive';

export const useStyles = makeStyles()(({colors}) => ({
  root: {
    flex: 1,
    backgroundColor: colors.background,
    flexDirection: 'column',
  },
  renderRoot: {
    flex: 1,
    marginTop: getSize.s(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderTitle: {
    marginTop: getSize.s(30),
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
  pagination: {
    width: getSize.s(10),
    height: getSize.s(10),
    borderRadius: getSize.s(5),
    marginHorizontal: getSize.s(8),
  },

  bodyLayout: {
    flex: 4.5,
  },
  bottomLayout: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: colors.blue,
    height: getSize.s(48),
    marginHorizontal: getSize.s(16),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: getSize.s(20),
    marginTop: getSize.s(10),
    borderRadius: getSize.s(8),
  },
  image: {
    width: getSize.s(200),
    height: getSize.s(200),
  },
}));
