import {getSize} from '@utils/responsive';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    width,
    marginVertical: 12,
  },
  banner: (opacity, scale, itemWidth, itemHeight) => ({
    opacity,
    width: itemWidth,
    height: getSize.s(itemHeight),
    transform: [{scale}],
  }),
  dotContainer: dotInside => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getSize.m(dotInside ? -10 : 20),
  }),
  dot: (opacity, dotWidth, dotInside) => ({
    opacity,
    width: getSize.s(dotInside ? 10 : 8),
    height: getSize.s(dotInside ? 3 : 8),
    borderRadius: getSize.s(dotInside ? 5 : 8),
    marginRight: getSize.s(dotInside ? 5 : 8),
    backgroundColor: dotInside ? 'white' : 'gray',
  }),
});
