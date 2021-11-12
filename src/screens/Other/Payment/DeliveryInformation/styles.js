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
    marginLeft: 25,
    marginRight: 25,
    width: 'auto',
  },
  pickerBox: {
    backgroundColor: colors.inputText,
    borderWidth: 0,
    borderRadius: 8,
    width: width / 2,
    marginTop: 5,
    marginLeft: 25,
  },
}));
