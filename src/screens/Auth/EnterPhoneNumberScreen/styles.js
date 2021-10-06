import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({}) => ({
  textInput: {
    paddingHorizontal: getSize.m(16),
  },
  text: {
    color: 'red',
    fontSize: 12,
    position: 'relative',
    bottom: '2%',
    left: '4%',
    marginTop: 8,
  },
}));
