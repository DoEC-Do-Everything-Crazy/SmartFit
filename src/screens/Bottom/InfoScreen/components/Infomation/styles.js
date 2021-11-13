import {makeStyles} from '@theme';
import {Dimensions} from 'react-native';
import {getSize} from '@utils/responsive';
const {width: windowWidth} = Dimensions.get('screen');
export const useStyles = makeStyles()(({colors}) => ({
  container: {
    borderTopLeftRadius: getSize.m(16),
    borderTopRightRadius: getSize.m(16),
  },
  button: {
    marginHorizontal: 16,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 8,
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
    width: windowWidth * 0.9,
    alignItems: 'center',
    backgroundColor: colors.border,
    justifyContent: 'center',
    elevation: 24,
    borderRadius: 10,
  },
  titleDialog: {
    textAlign: 'center',
    width: windowWidth * 0.9,
    margin: getSize.s(20),
    fontSize: 20,
  },
  btnSubmit: {
    width: windowWidth * 0.9,
    flexDirection: 'row',
  },
  btnNo: {
    borderTopColor: colors.primary,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderRightColor: colors.primary,
    width: windowWidth * 0.45,
  },
  titleNo: {
    textAlign: 'center',
    padding: getSize.s(10),
    color: colors.text,
    fontSize: 20,
  },
  btnYes: {
    borderTopColor: colors.primary,
    borderTopWidth: 1,
    width: windowWidth * 0.45,
  },
}));
