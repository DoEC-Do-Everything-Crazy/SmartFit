import {Block, Empty, Text, Button} from '@components';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';

import {lotties} from '@assets';
import {routes} from '@navigation/routes';
import {useStyles} from './styles';
import {useDispatch, useSelector} from 'react-redux';

import {useNavigation} from '@react-navigation/core';
import {firstLogin} from 'reduxs/reducers';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width: SliderWidth} = Dimensions.get('screen');

const OnBoardScreen = props => {
  const navigation = useNavigation();
  const [activeIndex, setActivateIndex] = useState(0);
  const carouselRef = useRef(null);
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);

  const [carouselState] = useState([
    {
      lotties: lotties.learn,
      title: t('learnAnywhere'),
      text: t('quarantine'),
    },
    {
      lotties: lotties.convenient,
      title: t('convenient'),
      text: t('weBringConvenience'),
    },
    {
      lotties: lotties.like,
      title: t('prestige'),
      text: t('theQuality'),
    },
  ]);
  const handleNext = useCallback(() => {
    navigation.navigate(routes.BOTTOM_TAB);
    dispatch(firstLogin());
  }, [dispatch, navigation]);
  const _renderItem = useCallback(
    ({item}) => {
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
    },
    [styles.renderRoot, styles.renderText, styles.renderTitle],
  );

  return (
    <SafeAreaView edges={['left', 'right']} style={styles.root}>
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
      <Block flex justifyEnd>
        <Button title={t('gotIt')} onPress={handleNext} style={styles.button} />
      </Block>
    </SafeAreaView>
  );
};
export default OnBoardScreen;
