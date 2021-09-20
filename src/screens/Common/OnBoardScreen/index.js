import {Block, Empty, Text} from '@components';
import {theme} from '@theme';
import React, {useCallback, useRef, useState} from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import styles from './styles';
import {lotties} from '@assets';

const {width: SliderWidth} = Dimensions.get('screen');

const OnBoardScreen = () => {
  const [activeIndex, setActivateIndex] = useState(0);
  const carouselRef = useRef(null);
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

      // <EmptyScreen picture={item.img} title={item.title} text={item.text} />
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
