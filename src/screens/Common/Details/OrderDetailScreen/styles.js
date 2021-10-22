import {getSize, width} from '@utils/responsive';
import {Platform} from 'react-native';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  itemReorder: {
    width: width / 2.2,
    alignItems: 'center',
    marginVertical: getSize.s(10),
    paddingVertical: getSize.s(10),
    paddingHorizontal: getSize.s(12),
    borderRadius: getSize.s(8),
    borderWidth: getSize.s(1),
    marginRight: getSize.s(5),
  },
  itemLeave: {
    width: width / 2.2,
    alignItems: 'center',
    marginVertical: getSize.s(10),
    paddingVertical: getSize.s(10),
    paddingHorizontal: getSize.s(12),
    borderRadius: getSize.s(8),
    marginLeft: getSize.s(5),
    backgroundColor: colors.red,
  },
  itemHeader: {
    justifyContent: 'center',
    paddingVertical: getSize.s(5),
    paddingHorizontal: getSize.s(20),
    borderRadius: getSize.s(8),
    marginHorizontal: getSize.s(12),
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    backgroundColor: colors.background,
  },

  text: {
    fontSize: getSize.s(18),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    borderTopLeftRadius: getSize.m(5),
    borderBottomLeftRadius: getSize.m(5),
    width: getSize.s(100),
    height: getSize.s(120),
  },

  itemCancel: {
    justifyContent: 'center',
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: colors.red,
  },
  itemConfirm: {
    justifyContent: 'center',
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: colors.green,
  },
}));
