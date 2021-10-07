import {makeStyles} from '@theme';
import {getSize} from '@utils/responsive';

export const useStyles = makeStyles()(({colors}) => ({
  root: {
    flex: 1,
    flexDirection: 'column',
  },
  renderRoot: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  renderTitle: {
    marginTop: getSize.s(10),
    fontSize: getSize.s(24),
    fontWeight: 'bold',
    textAlign: 'center',
  },

  button: {
    backgroundColor: colors.blue,
    height: getSize.s(48),
    marginHorizontal: getSize.s(16),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: getSize.s(20),
    borderRadius: getSize.s(8),
  },
  textInput: {
    paddingHorizontal: getSize.m(16),
  },
  text: {
    color: 'red',
    fontSize: 12,
    position: 'relative',
    bottom: '2%',
    left: '4%',
    marginTop: 8,
  },
}));
