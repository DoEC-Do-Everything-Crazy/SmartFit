import {getSize, width} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  image: {
    height: getSize.s(100),
    width: getSize.s(150),
  },
  container: {
    borderWidth: 1,
    borderColor: colors.recommended,
  },
  space: {
    flex: 0.8,
  },
  title: {
    width: '100%',
    backgroundColor: `${colors.black}40`,
    position: 'absolute',
    bottom: 0,
    paddingVertical: getSize.m(8),
    paddingHorizontal: getSize.m(16),
    borderBottomLeftRadius: getSize.m(10),
    borderBottomRightRadius: getSize.m(10),
  },
  view: {
    width: getSize.s(20),
    height: getSize.s(18),
    position: 'absolute',
    top: getSize.s(1),
    left: getSize.s(0),
  },
  iconViewer: {
    marginLeft: 10,
    marginTop: 1,
    width: getSize.s(25),
    height: getSize.s(20),
  },
}));
