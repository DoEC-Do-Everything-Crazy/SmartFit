import {makeStyles} from '@theme';
import {getSize, width} from '@utils/responsive';

export const useStyles = makeStyles()(({colors}) => ({
  container: {
    borderTopLeftRadius: getSize.m(16),
    borderTopRightRadius: getSize.m(16),
  },
  button: {
    height: getSize.s(48),
    justifyContent: 'flex-end',
    marginTop: getSize.s(10),
    borderRadius: getSize.s(8),
  },
  iOSBackdrop: {
    backgroundColor: '#000000',
    opacity: 0.4,
  },
  androidBackdrop: {
    backgroundColor: '#232f34',
    opacity: 0.32,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  containerBox: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertBox: {
    width: width * 0.9,
    alignItems: 'center',
    backgroundColor: colors.dialog,
    justifyContent: 'center',
    elevation: 24,
    borderRadius: 10,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: getSize.s(15),
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  floatComponent: {
    backgroundColor: colors.backgroundSetting,
  },
  title: {
    fontSize: getSize.s(20),
  },
  sendControlContainerOuter: {
    flex: 1,
    backgroundColor: colors.border,
  },
}));
