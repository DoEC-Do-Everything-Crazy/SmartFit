import {getSize} from '@utils/responsive';
import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({}) => ({
  container: (
    width,
    height,
    borderRadius,
    marginVer,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    colors,
  ) => ({
    width: width,
    height: height,
    borderRadius: getSize.m(borderRadius),
    marginVertical: getSize.m(marginVer),
    marginTop: getSize.m(marginTop),
    marginBottom: getSize.m(marginBottom),
    marginLeft: getSize.m(marginLeft),
    marginRight: getSize.m(marginRight),
    overflow: 'hidden',
    backgroundColor: colors ? colors[0] : '#E6E6E6',
  }),
}));
