import {width, getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  image: {
    width: width / 2 - 20,
    height: 120,
    alignSelf: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  text: {
    width: width / 2 - 20,
    zIndex: 100,
    position: 'absolute',
    bottom: 30,
    backgroundColor: `${colors.headerDetail}99`,
  },
  button: {
    width: 23,
    height: 23,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCCB6',
  },
  icon: {
    position: 'absolute',
    top: getSize.s(5),
    right: getSize.s(5),
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  press: {flex: 0},
}));
