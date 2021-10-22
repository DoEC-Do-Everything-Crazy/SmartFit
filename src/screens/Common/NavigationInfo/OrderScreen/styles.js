import {getSize, width} from '@utils/responsive';
import {Platform} from 'react-native';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  item: {
    height: getSize.m(40),
    justifyContent: 'center',
    marginVertical: getSize.m(10),
    paddingVertical: getSize.m(5),
    paddingHorizontal: getSize.m(10),
    borderRadius: getSize.m(8),
    marginHorizontal: getSize.m(10),
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    backgroundColor: colors.background,
  },
  image: {
    borderRadius: getSize.s(10),
    width: width,
    height: getSize.s(240),
  },
  text: {
    fontSize: getSize.s(18),
    fontWeight: 'bold',
  },
}));
