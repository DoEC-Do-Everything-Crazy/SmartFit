import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';
import {width} from 'utils/responsive';
import {Platform} from 'react-native';

export const useStyles = makeStyles()(({colors}) => ({
  image: {
    borderRadius: getSize.m(8),
    width: getSize.s(100),
    height: getSize.s(100),
    marginRight: getSize.s(20),
  },
  textInput: {
    paddingHorizontal: getSize.m(16),
  },
  item: {
    justifyContent: 'center',
    marginVertical: getSize.m(10),
    paddingVertical: getSize.m(5),
    paddingHorizontal: getSize.m(12),
    borderRadius: getSize.m(8),
    borderWidth: getSize.m(1),
  },
  itemCancel: {
    justifyContent: 'center',
    marginVertical: getSize.m(10),
    paddingVertical: getSize.m(5),
    paddingHorizontal: getSize.m(12),
    borderRadius: getSize.m(8),
    backgroundColor: colors.red,
  },
  itemConfirm: {
    justifyContent: 'center',
    marginVertical: getSize.m(10),
    paddingVertical: getSize.m(5),
    paddingHorizontal: getSize.m(12),
    borderRadius: getSize.m(8),
    backgroundColor: colors.green,
  },
  bottomLayout: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  floatComponent: {
    backgroundColor: colors.background,
  },
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
  imageItem: {
    borderTopLeftRadius: getSize.m(5),
    borderBottomLeftRadius: getSize.m(5),
    width: getSize.s(100),
    height: getSize.s(120),
  },
  header: {
    width: '100%',
    zIndex: 100,
    position: 'absolute',
    top: 0,
  },
  sendControlContainerOuter: {
    flex: 1,
  },
}));
