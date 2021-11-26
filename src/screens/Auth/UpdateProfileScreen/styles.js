import {getSize, width} from '@utils/responsive';

import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  group: {
    paddingHorizontal: getSize.s(16),
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
  },
  avatar: {
    height: getSize.s(70),
    width: getSize.s(70),
    marginRight: getSize.s(10),
    borderRadius: getSize.s(70),
  },
  camera: {
    alignItems: 'center',
  },
  cameraImage: {
    // padding: getSize.s(5),
    position: 'absolute',
    bottom: getSize.s(5),
    height: getSize.s(15),
    width: getSize.s(15),
  },

  image: {
    height: getSize.s(70),
    width: getSize.s(70),
    borderRadius: getSize.s(70),
  },
  title: {
    width: getSize.s(65),
    backgroundColor: `${colors.white}80`,
    position: 'absolute',
    bottom: 0,
    paddingVertical: getSize.m(2),
    borderBottomLeftRadius: getSize.m(70),
    borderBottomRightRadius: getSize.m(70),
  },
  calendar: {
    flex: 1,
  },
  gender: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: getSize.s(-2),
    backgroundColor: colors.inputText,
    borderRadius: getSize.s(8),
    height: getSize.s(60),
    marginBottom: getSize.s(30),
    borderWidth: 0,
  },
  pickerBox: {
    width: width - 30,
    marginLeft: getSize.s(-2),
    borderColor: colors.inputText,
  },
  img: {
    height: getSize.m(20),
    width: getSize.m(20),
  },
  sendControlContainerOuter: {
    flex: 1,
    backgroundColor: colors.border,
  },
  text: {
    color: colors.red,
    fontSize: 12,
    position: 'relative',
    bottom: '2%',
    left: '4%',
  },
  button: {
    backgroundColor: colors.blue,
    height: getSize.s(48),
    marginHorizontal: getSize.s(16),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: getSize.s(10),
    borderRadius: getSize.s(8),
  },
}));
