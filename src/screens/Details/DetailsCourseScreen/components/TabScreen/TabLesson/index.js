/* eslint-disable react-hooks/exhaustive-deps */
import Carousel, {Pagination} from 'react-native-snap-carousel';
import React, {useCallback, useRef, useState} from 'react';

import {Block} from '@components';
import {Dimensions} from 'react-native';
import ListStep from './components/ListStep';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const {width: screenWidth} = Dimensions.get('window');

const TabLesson = props => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(themeStore);
  const theme = useTheme(themeStore);

  const _renderItem = useCallback(({item, index}, parallaxProps) => {
    return (
      <Block style={styles.item}>
        <ListStep index={index} />
      </Block>
    );
  }, []);

  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={_renderItem}
        hasParallaxImages={true}
        onSnapToItem={item => setIndex(item)}
      />
      <Pagination
        dotsLength={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={styles.pagination}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </Block>
  );
};

export default TabLesson;
