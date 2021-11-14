import {makeStyles} from '@theme';
import {getSize} from '@utils/responsive';
export const useStyles = makeStyles()(({colors}) => ({
  item: {
    width: getSize.m(200),
    height: getSize.m(260),
  },
  imageContainer: {
    backgroundColor: 'white',
    borderRadius: getSize.s(8),
  },
  image: {
    width: getSize.m(200),
    height: getSize.m(260),
  },
  list: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    zIndex: 100,
    position: 'absolute',
    bottom: 40,
  },
  container: {
    flex: 1,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    height: 0.3,
    width: '100%',
    backgroundColor: colors.gray,
    opacity: 0.8,
  },
  boldText: {
    fontWeight: 'bold',
  },
  contentContainerStyle: {
    paddingBottom: getSize.m(200),
  },
  layout: {
    width: getSize.s(60),
    height: getSize.s(60),
    borderRadius: getSize.s(50),
    position: 'absolute',
    bottom: -18,
    right: -18,
  },
  groupButton: {
    width: getSize.s(60),
    height: getSize.s(60),
    borderRadius: getSize.s(50),
    position: 'absolute',
    bottom: 32,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
}));
