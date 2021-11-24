import {getSize, width} from '@utils/responsive';

import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors}) => ({
  containerDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputText,
    borderRadius: getSize.s(8),
    height: getSize.s(60),
    borderWidth: 0,
    marginTop: 10,
    marginLeft: 0,
    width: width / 1.2,
  },
  pickerBox: {
    backgroundColor: colors.inputText,
    borderWidth: 0,
    borderRadius: 8,
    width: width / 1.2,
    marginTop: 5,
    marginLeft: 0,
  },

  button: {
    backgroundColor: colors.blue,
    marginHorizontal: 25,
    height: 50,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
}));
