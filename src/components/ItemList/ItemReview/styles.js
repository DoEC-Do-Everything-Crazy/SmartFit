import {makeStyles} from '@theme';

export const useStyles = makeStyles()(({colors, font}) => ({
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    position: 'absolute',
    zIndex: 1,
  },
  image: {
    width: 80,
    height: 80,
    marginHorizontal: 5,
    borderRadius: 5,
    resizeMode: 'cover',
  },

  scroll: {marginTop: 10},
}));
