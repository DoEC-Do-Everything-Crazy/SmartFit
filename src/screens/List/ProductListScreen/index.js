import * as Animatable from 'react-native-animatable';

import {FlatList, ScrollView, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Block} from '@components';
import ItemCarousel from '@components/ItemList/ItemCarousel';
import {productApi} from 'api/productApi';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {Cart} from '@assets/icons';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const ProductListScreen = ({props, navigation, route}) => {
  const [products, setProducts] = useState([]);
  const viewRef = React.useRef(null);
  const {type} = route.params;

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);
  const fetchData = async () => {
    try {
      const resData = await productApi.getProductByType(type);
      setProducts(resData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    // Check if the user is scrolling up or down by confronting the new scroll position with your own one

    const offsetList = event.nativeEvent.contentOffset.y;

    offsetList > 0 ? (offset.value = 1) : (offset.value = 0);
  };
  const navigations = useNavigation();
  useEffect(() => {
    const unsubscribe = navigations.addListener('focus', () => {
      viewRef.current.animate({0: {opacity: 0}, 1: {opacity: 1}});
    });
    return () => unsubscribe;
  }, [navigations]);
  const _renderItemCarousel = ({item, index}) => (
    <ItemCarousel item={item} key={index} />
  );

  return (
    <Block flex backgroundColor={theme.colors.backgroundSetting}>
      <ScrollView
        onScroll={onScroll}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Animatable.View
          ref={viewRef}
          easing={'ease-in-out'}
          style={styles.container}>
          <Block marginTop={32} justifyCenter alignCenter>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              style={{marginTop: 16, marginLeft: 80}}
              numColumns={1}
              data={products}
              renderItem={_renderItemCarousel}
              keyExtractor={(item, index) => index}
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
  );
};

export default ProductListScreen;
