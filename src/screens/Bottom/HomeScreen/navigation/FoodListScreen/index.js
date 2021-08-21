import {Block, Header} from '@components';
import {theme} from '@theme';
import React, {useState} from 'react';
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel';
import styles from './styles';
import {images} from '@assets';
import {Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');
const DATA = [1, 2, 3, 4, 5, 6];

const FoodListScreen = () => {
  const [index, setIndex] = useState(0);
  const _renderItem = ({item, index}, parallaxProps) => {
    return (
      <Block style={styles.item}>
        <ParallaxImage
          source={images.lesson}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </Block>
    );
  };
  return (
    <Block flex marginBottom={16}>
      <Header
        canGoBack
        cart
        title="Food Items"
        colorTheme={theme.colors.black}
      />
      <Carousel
        loop
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={DATA}
        renderItem={_renderItem}
        hasParallaxImages={true}
        onSnapToItem={item => setIndex(item)}
        autoplay={true}
      />
    </Block>
  );
};

export default FoodListScreen;
