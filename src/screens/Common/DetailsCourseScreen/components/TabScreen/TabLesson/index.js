import {Block} from '@components';
import {theme} from '@theme';
import React, {useRef, useState} from 'react';
import {Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import ListStep from './components/ListStep';
import styles from './styles';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const {width: screenWidth} = Dimensions.get('window');

const TabLesson = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const _renderItem = ({item, index}, parallaxProps) => {
    return (
      <Block style={styles.item}>
        <ListStep index={index} />
      </Block>
    );
  };
  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth}
        data={data}
        renderItem={_renderItem}
        hasParallaxImages={true}
        onSnapToItem={item => setIndex(item)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: theme.colors.blue,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </Block>
  );
};

export default TabLesson;
