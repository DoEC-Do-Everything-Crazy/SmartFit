import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Block, Header} from '@components';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Image, Pressable, ScrollView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import {Cart} from '@assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import ListHotCourse from './components/ListHotCourse';
import ListHotFood from './components/ListHotFood';
import ListMenu from './components/ListMenu';
import ListProduct from './components/ListProduct';
import ListRecommended from './components/ListRecommended';
/* eslint-disable react-hooks/exhaustive-deps */
import {images} from '@assets';
import {routes} from '@navigation/routes';
import setAuthToken from 'utils/setAuthToken';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';
import {width} from '@utils/responsive';

const HomeScreen = props => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const offset = useSharedValue(0);
  const {
    theme: {theme: themeStore},
    user: {user, token},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);
  const carouselRef = useRef(null);

  const [activeIndex, setActivateIndex] = useState(0);

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

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(offset.value * 255, {
            damping: 20,
            stiffness: 200,
          }),
        },
      ],
    };
  });

  const _renderItemCarousel = ({item, index}) => (
    <Image source={item.img} style={styles.image} />
  );

  const onScroll = event => {
    const offsetList = event.nativeEvent.contentOffset.y;

    offsetList > 0 ? (offset.value = 1) : (offset.value = 0);
  };

  useEffect(() => {
    setAuthToken(token);
  }, []);

  return (
    <Block flex backgroundColor={theme.colors.blue}>
      <Header type="Bottom" title={t('home')} colorTheme={theme.colors.white} />
      <Block
        flex
        alignCenter
        backgroundColor={theme.colors.backgroundSetting}
        style={styles.container}>
        <ScrollView onScroll={onScroll} showsVerticalScrollIndicator={false}>
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
              onSnapToItem={index => {
                setActivateIndex(index);
              }}
            />
            {
              <Pagination
                dotsLength={dataBanner.length}
                activeDotIndex={activeIndex}
                dotStyle={styles.pagination}
                tappableDots
                carouselRef={carouselRef}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
              />
            }
          </Block>
          <ListMenu />
          {user && <ListRecommended />}
          <ListHotFood />
          <ListHotCourse />
          <ListProduct />
        </ScrollView>
        <Animated.View style={[styles.groupButton, animatedStyles]}>
          <Pressable
            onPress={() => {
              navigation.navigate(routes.CART_SCREEN);
            }}>
            {themeStore === 'dark' ? (
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#70A2FF', '#54F0D1']}
                style={styles.layout}
              />
            ) : null}
            <Cart color={theme.colors.white} />
          </Pressable>
        </Animated.View>
      </Block>
    </Block>
  );
};

export default HomeScreen;
