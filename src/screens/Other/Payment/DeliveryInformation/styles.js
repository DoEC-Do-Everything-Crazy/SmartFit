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
    width: width / 2,
  },
  pickerBox: {
    width: width - 30,
    marginLeft: getSize.s(-2),
    borderColor: colors.inputText,
  },
}));
