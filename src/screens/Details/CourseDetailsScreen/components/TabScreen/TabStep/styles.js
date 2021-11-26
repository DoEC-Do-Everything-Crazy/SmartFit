import {getSize, width} from '@utils/responsive';
import {Platform} from 'react-native';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  item: {
    width: width,
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    backgroundColor: colors.background,
  },
  image: {
    marginTop: getSize.s(16),
    borderRadius: getSize.s(10),
    width: width - 32,
    height: 240,
  },
  pagination: {
    width: 15,
    height: 15,
    borderRadius: 15,
    marginHorizontal: -5,
    backgroundColor: colors.blue,
  },
}));
