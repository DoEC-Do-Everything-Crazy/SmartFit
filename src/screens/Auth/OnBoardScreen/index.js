import {Block, Empty, Text, Button} from '@components';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';

import {lotties} from '@assets';
import {routes} from '@navigation/routes';
import styles from './styles';
import {useDispatch} from 'react-redux';

import {useNavigation} from '@react-navigation/core';
import {firstLogin} from 'reduxs/reducers';

const {width: SliderWidth} = Dimensions.get('screen');

const OnBoardScreen = () => {
  const navigation = useNavigation();
  const [activeIndex, setActivateIndex] = useState(0);
  const carouselRef = useRef(null);
  const dispatch = useDispatch();

  const [carouselState] = useState([
    {
      lotties: lotties.learn,
      title: 'Learn anytime and anywhere',
      text: 'Quarantine is the perfect time to spend your day learning something new, from anywhere!',
    },
    {
      lotties: lotties.convenient,
      title: 'convenient',
      text: 'We bring convenience to users in choosing products about sports, courses, healthy meals at home.',
    },
    {
      lotties: lotties.like,
      title: 'Prestige and quality',
      text: 'The quality and reputation of the service are our core values, so customers will always feel secure when using the service.',
    },
  ]);
  const handleNext = useCallback(() => {
    navigation.navigate(routes.BOTTOM_TAB);
    dispatch(firstLogin());
  }, [dispatch, navigation]);
  const _renderItem = useCallback(({item}) => {
    return (
      <Block style={styles.renderRoot}>
        <Block flex />
        <Block flex>
          <Empty lottie={item.lotties} />
        </Block>
        <Block flex>
          <Text style={styles.renderTitle}>{item.title}</Text>
          <Text style={styles.renderText}>{item.text}</Text>
        </Block>
      </Block>
    );
  }, []);

  return (
    <Block style={styles.root}>
      <Block style={styles.bodyLayout}>
        <Carousel
          layout={'default'}
          ref={carouselRef}
          hasParallaxImages={true}
          data={carouselState}
          sliderWidth={SliderWidth}
          itemWidth={SliderWidth}
          renderItem={_renderItem}
          useScrollView
          autoplayInterval={1000}
          loop={true}
          activeAnimationType={'decay'}
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
      </Block>

      <Button title="Apply" onPress={handleNext} style={styles.button} />
    </Block>
  );
};
export default OnBoardScreen;
