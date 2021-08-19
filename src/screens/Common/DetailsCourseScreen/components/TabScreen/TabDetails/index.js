import {Block, Text} from '@components';
import {theme} from '@theme';
import React, {useRef, useState} from 'react';
import {Dimensions, Image, ImageBackground} from 'react-native';
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import {images, icons} from '@assets';
import styles from './styles';
import {width} from '@utils/responsive';
import {Rating} from 'react-native-ratings';

const {width: screenWidth} = Dimensions.get('window');
const DATA = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];

const TabDetails = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const _renderItem = ({item, index}, parallaxProps) => {
    return (
      <Block style={styles.item}>
        <ParallaxImage
          fadeDuration={1000}
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.1}
          {...parallaxProps}
        />
      </Block>
    );
  };

  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Block paddingHorizontal={16}>
        <Carousel
          loop
          layout={'tinder'}
          layoutCardOffset={10}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          sliderWidth={screenWidth}
          sliderHeight={300}
          itemWidth={screenWidth}
          data={DATA}
          renderItem={_renderItem}
          hasParallaxImages={true}
          containerCustomStyle={styles.slider}
        />
      </Block>
      <Text paddingHorizontal={16} size={40} fontType="bold">
        4 Week Fat Loss Workout
      </Text>
      <Block
        row
        paddingVertical={10}
        paddingHorizontal={16}
        backgroundColor={theme.colors.lightBlue}>
        <Rating
          type="custom"
          ratingColor="#045694"
          ratingCount={5}
          imageSize={18}
          tintColor={theme.colors.lightBlue}
        />
        <Text marginLeft={100} color={theme.colors.blue}>
          6,3k Completed
        </Text>
      </Block>
      <Block marginTop={10} paddingHorizontal={16}>
        <Text fontType="bold">
          Welcome to this effecient body cardio workout that makes for warm up
          workout
        </Text>
        <Text fontType="bold">
          Welcome to this effecient body cardio workout that makes for warm up
          workout
        </Text>
        <Block row alignCenter marginTop={16}>
          <Block>
            <Text>Plan length: </Text>
            <Text>Avg. Duration: </Text>
            <Text>Days per Weeks: </Text>
            <Text>Difficulty: </Text>
            <Text>Body Focus: </Text>
          </Block>
          <Block marginLeft={20}>
            <Text fontType="bold">4 weeks</Text>
            <Text fontType="bold">35 Minutes (27-35)</Text>
            <Text fontType="bold">5 days </Text>
            <Text fontType="bold">3-5 </Text>
            <Text fontType="bold">Total body </Text>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default TabDetails;
