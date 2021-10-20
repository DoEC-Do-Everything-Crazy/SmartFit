import {getSize, width} from '@utils/responsive';
import {Platform} from 'react-native';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  item: {
    justifyContent: 'center',
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginHorizontal: 20,
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
  header: {
    width: '100%',
    zIndex: 100,
    position: 'absolute',
    top: 0,
  },
}));
