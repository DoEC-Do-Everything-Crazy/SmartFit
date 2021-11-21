/* eslint-disable react-hooks/exhaustive-deps */
import * as Animatable from 'react-native-animatable';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {FlatList, Pressable, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Block} from '@components';
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
  const [products, setProducts] = useState([]);
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

  const fetchData = async () => {
    try {
      const resData = await productApi.getProductByType(type);
      setProducts(resData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = navigations.addListener('focus', () => {
      viewRef.current.animate({0: {opacity: 0}, 1: {opacity: 1}});
    });
    return () => unsubscribe;
  }, [navigations]);
  const _renderItemCarousel = ({item, index}) => (
    <ItemCarousel item={item} key={index} />
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView
      edges={['bottom', 'top', 'left', 'right']}
      style={styles.sendControlContainerOuter}>
      <Block flex backgroundColor={theme.colors.backgroundSetting}>
        <ScrollView
          // onScroll={onScroll}
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
                data={products}
                renderItem={_renderItemCarousel}
                keyExtractor={keyExtractor}
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
