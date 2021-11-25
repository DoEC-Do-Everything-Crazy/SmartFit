import {lotties} from '@assets';
import {Cart} from '@assets/icons';
/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Empty, Header, ListDataFooter} from '@components';
import ItemCourse from '@components/ItemList/ItemCourse';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useTheme} from '@theme';
import {courseApi} from 'api/courseApi';
import {courseType} from 'data/courseType';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {keyExtractor} from 'utils/keyExtractor';
import {useStyles} from './styles';
import setAuthToken from 'utils/setAuthToken';

const CourseListScreen = ({route, props}) => {
  const navigation = useNavigation();
  const {type, nameScreen} = route.params;

  const {
    theme: {theme: themeStore},
    user: {token},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);
  const offset = useSharedValue(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState([]);

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
        <ItemCourse nameScreen={nameScreen} course={item} key={index} />
      </Block>
    );
  });

  const handleLoadMore = async () => {
    if (allLoaded || isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      let response;
      if (nameScreen === 'course') {
        response = await courseApi.getCourses({
          pageNumber,
          type,
        });
      } else {
        setAuthToken(token);
        response = await courseApi.getUserCourses({pageNumber, type});
      }

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
      let response;
      if (nameScreen === 'course') {
        response = await courseApi.getCourses({
          pageNumber,
          type,
        });
      } else {
        setAuthToken(token);
        response = await courseApi.getUserCourses({pageNumber, type});
      }

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
