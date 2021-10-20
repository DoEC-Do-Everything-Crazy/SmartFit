import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors, font}) => ({
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    position: 'absolute',
    zIndex: 1,
  },
}));
