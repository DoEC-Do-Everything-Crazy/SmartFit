import {ActivityIndicator, FlatList, Platform, Pressable} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Block,
  Empty,
  Header,
  ListDataFooter,
  LoadMore,
  Loading,
  Text,
} from '@components';
import React, {useCallback, useEffect, useState} from 'react';

import {Cart} from '@assets/icons';
import ItemCourse from '@components/ItemList/ItemCourse';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {courseApi} from 'api/courseApi';
import {courseType} from 'data/courseType';
import {keyExtractor} from 'utils/keyExtractor';
import {lotties} from '@assets';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const CourseListScreen = ({route, props}) => {
  const navigation = useNavigation();
  const {type} = route.params;

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);
  const offset = useSharedValue(0);

  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const _renderItem = useCallback(({item, index}) => {
    return (
      <Block paddingTop={index === 0 ? 20 : 0}>
        <ItemCourse course={item} key={index} />
      </Block>
    );
  });

  const handleLoadMore = async () => {
    if (allLoaded || isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await courseApi.getCourses({
        pageNumber,
        type,
      });

      const {courses, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      setData(data.concat(courses));
      setPageNumber(pageNumber + 1);
    } catch (e) {
      console.error(e.message);
    }

    setIsLoading(false);
  };

  const initData = async () => {
    setIsLoading(true);

    try {
      const response = await courseApi.getCourses({
        pageNumber,
        type,
      });

      const {courses, page, pages} = response;

      if (page >= pages) {
        setAllLoaded(true);
      }

      setData(data.concat(courses));
      setPageNumber(pageNumber + 1);
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

  useEffect(() => {
    initData();
  }, []);

  return (
    <SafeAreaView
      edges={['left', 'right']}
      style={styles.sendControlContainerOuter}>
      <Block flex backgroundColor={theme.colors.backgroundSetting}>
        <Header
          canGoBack
          title={courseType.find(element => element.name === type).displayName}
          colorTheme={theme.colors.blue}
          filter
          search
        />
        <Block flex>
          {!isLoading && data.length === 0 ? (
            <Empty lottie={lotties.emptySearch} />
          ) : (
            <>
              <FlatList
                onScroll={onScroll}
                data={data}
                keyExtractor={keyExtractor}
                renderItem={_renderItem}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={_footerComponent}
              />
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
            </>
          )}
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default CourseListScreen;
