/* eslint-disable react-hooks/exhaustive-deps */
import * as Animatable from 'react-native-animatable';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Block, ListDataFooter} from '@components';
import {FlatList, Pressable, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Cart} from '@assets/icons';
import ItemCarousel from '@components/ItemList/ItemCarousel';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {keyExtractor} from 'utils/keyExtractor';
import {productApi} from 'api/productApi';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ProductListScreen = ({props, navigation, route}) => {
  const navigations = useNavigation();
  const {type} = route.params;

  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const viewRef = React.useRef(null);

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);

  const offset = useSharedValue(0);

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

  const onScroll = event => {
    const offsetList = event.nativeEvent.contentOffset.y;

    offsetList > 0 ? (offset.value = 1) : (offset.value = 0);
  };

  const handleLoadMore = async () => {
    if (allLoaded || isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await productApi.getProducts({
        pageNumber,
        type,
        active: true,
      });

      const {products, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      setData(data.concat(products));
      setPageNumber(pageNumber + 1);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  };

  const initData = async () => {
    setIsLoading(true);

    try {
      const response = await productApi.getProducts({
        pageNumber: 1,
        type,
        active: true,
      });

      const {products, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      setData(products);
      setPageNumber(2);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  };

  const _footerComponent = () => {
    return (
      <ListDataFooter
        allLoaded={allLoaded}
        isLoading={isLoading}
        onPress={handleLoadMore}
      />
    );
  };

  const _renderItemCarousel = ({item, index}) => (
    <ItemCarousel item={item} key={index} />
  );

  useEffect(() => {
    const unsubscribe = navigations.addListener('focus', () => {
      viewRef.current.animate({0: {opacity: 0}, 1: {opacity: 1}});
    });
    return () => unsubscribe;
  }, [navigations]);

  useEffect(() => {
    initData();
  }, []);

  return (
    <SafeAreaView
      edges={['bottom', 'top', 'left', 'right']}
      style={styles.sendControlContainerOuter}>
      <Block flex backgroundColor={theme.colors.backgroundSetting}>
        <ScrollView
          onScroll={onScroll}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Animatable.View
            ref={viewRef}
            easing={'ease-in-out'}
            style={styles.container}>
            <Block justifyCenter alignCenter>
              <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={{marginTop: 16, marginLeft: 80}}
                numColumns={1}
                data={data}
                renderItem={_renderItemCarousel}
                keyExtractor={keyExtractor}
                ListFooterComponent={_footerComponent}
              />
            </Block>
          </Animatable.View>
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
    </SafeAreaView>
  );
};

export default ProductListScreen;
