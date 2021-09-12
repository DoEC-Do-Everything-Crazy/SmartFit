import React, {useCallback, useRef, useState} from 'react';

import {EmptyScreen, Text} from '@components';
import {theme} from '@theme';
import {Dimensions, Image, View, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import styles from './styles';
const {width: SliderWidth} = Dimensions.get('screen');

const OnBoardScreen = () => {
  const [activeIndex, setActivateIndex] = useState(0);
  const carouselRef = useRef(null);
  const [carouselState] = useState([
    {
      img: 'https://gocbinhluan.com/public/photos/shares/201911/20191130/20191130_hinh12.jpg',
      text: 'Something text.......................',
      title: 'Title',
    },
    {
      img: 'https://gocbinhluan.com/public/photos/shares/201911/20191130/20191130_hinh12.jpg',
      text: 'Something text.......................',
      title: 'Title',
    },
    {
      img: 'https://gocbinhluan.com/public/photos/shares/201911/20191130/20191130_hinh12.jpg',
      text: 'Something text.......................',
      title: 'Title',
    },
  ]);

  const _renderItem = useCallback(({item}) => {
    return (
      <EmptyScreen picture={item.img} title={item.title} text={item.text} />
    );
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.bodyLayout}>
        <Carousel
          layout={'default'}
          ref={carouselRef}
          hasParallaxImages={true}
          data={carouselState}
          sliderWidth={SliderWidth}
          itemWidth={SliderWidth}
          renderItem={_renderItem}
          useScrollView
          onSnapToItem={index => {
            setActivateIndex(index);
          }}
          activeSlideAlignment="center"
        />
        {
          <Pagination
            dotsLength={carouselState.length}
            activeDotIndex={activeIndex}
            dotStyle={styles.pagination}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        }
      </View>
      <View style={styles.bottomLayout}>
        <TouchableOpacity style={styles.button}>
          <Text color={theme.colors.white} size={18}>
            Apply
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default OnBoardScreen;
