/* eslint-disable react-hooks/exhaustive-deps */
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Image, Pressable, ScrollView} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {Text, View} from 'react-native';

import {Block} from '@components';
import {images} from '@assets';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {width} from '@utils/responsive';

const HeaderBanner = props => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);

  const styles = useStyles(props, themeStore);

  const [activeIndex, setActivateIndex] = useState(0);
  const carouselRef = useRef(null);

  const dataBanner = [
    {
      img: images.banner1,
    },
    {
      img: images.banner2,
    },
    {
      img: images.banner3,
    },
    {
      img: images.banner4,
    },
  ];

  const handleOnSnapToItem = useCallback(index => {
    setActivateIndex(index);
  }, []);

  const _renderItemCarousel = useCallback(({item}) => {
    return <Image source={item.img} style={styles.image} />;
  }, []);

  return (
    <Block alignCenter marginTop={20}>
      <Carousel
        loop
        ref={carouselRef}
        sliderWidth={width}
        sliderHeight={width}
        autoplay
        loopClonesPerSide={4}
        layout="tinder"
        itemWidth={width - 20}
        data={dataBanner}
        hasParallaxImages={true}
        renderItem={_renderItemCarousel}
        onSnapToItem={handleOnSnapToItem}
      />

      <Pagination
        dotsLength={dataBanner.length}
        activeDotIndex={activeIndex}
        dotStyle={styles.pagination}
        tappableDots
        carouselRef={carouselRef}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </Block>
  );
};

export default HeaderBanner;
